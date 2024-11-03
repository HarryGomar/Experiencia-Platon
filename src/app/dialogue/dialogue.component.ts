import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueService } from '../dialogue.service';
import { DialogueNode, DialogueChoice } from '../dialogue-node';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogueComponent implements OnInit, AfterViewChecked {
  currentNode: DialogueNode | null = null;
  nextNodes: DialogueChoice[] = [];
  dialogueHistory: { speaker: string; text: string }[] = [];
  animatedText: { speaker: string; words: string[]; visibleWords: boolean[] }[] = [];
  experienceStarted = false;
  blockNodeStack: DialogueNode[] = []; // Stack to handle nested blocks

  @ViewChild('dialogueHistoryContainer', { static: false })
  private dialogueHistoryContainer!: ElementRef;

  // **Added Set to track visited nodes**
  visitedNodes: Set<number> = new Set();

  constructor(
    private dialogueService: DialogueService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    if (this.experienceStarted) {
      this.scrollToBottom();
    }
  }

  /**
   * Starts the dialogue experience by initiating the first node after a delay.
   */
  startDialogue(): void {
    this.experienceStarted = true;
    setTimeout(() => {
      this.setNode(0);
    }, 700);
  }

  /**
   * Handles the selection of a dialogue option.
   * @param nextNodeId The ID of the next node to navigate to.
   */
  async selectOption(nextNodeId: number): Promise<void> {
    if (this.isBlockNode()) {
      await this.handleBlockNodeSelection(nextNodeId);
    } else {
      await this.setNode(nextNodeId);
    }
  }

  /**
   * Checks if the current node is of type 'block'.
   */
  private isBlockNode(): boolean {
    return this.currentNode?.type === 'block';
  }

  /**
   * Handles the selection logic when the current node is a block node.
   * @param nextNodeId The ID of the next node to navigate to.
   */
  private async handleBlockNodeSelection(nextNodeId: number): Promise<void> {
    this.pushCurrentBlockNode();

    const choice = this.findChoice(nextNodeId);
    if (choice?.direct) {
      // Since it's a direct choice, we should exit the current block
      this.blockNodeStack.pop(); // Pop the current block node
      await this.setNode(nextNodeId);
    } else {
      await this.processBlockNodeChoice(nextNodeId);
    }
  }

  /**
   * Pushes the current node onto the block node stack if it's not already there.
   */
  private pushCurrentBlockNode(): void {
    const currentBlockNode = this.getCurrentBlockNode();
    if (currentBlockNode?.id !== this.currentNode?.id) {
      this.blockNodeStack.push(this.currentNode!);
    }
  }
  

  /**
   * Retrieves the current block node from the top of the stack.
   */
  private getCurrentBlockNode(): DialogueNode | undefined {
    return this.blockNodeStack[this.blockNodeStack.length - 1];
  }

  /**
   * Finds a choice within the current block node's choices.
   * @param nextNodeId The ID of the next node to navigate to.
   */
  private findChoice(
    nextNodeId: number
  ): { text: string; next: number; direct?: true; disabled?: boolean } | undefined {
    const currentBlockNode = this.getCurrentBlockNode();
    return currentBlockNode?.choices?.find(choice => choice.next === nextNodeId);
  }

  /**
   * Processes the selection within a block node, disabling choices as necessary.
   * @param nextNodeId The ID of the next node to navigate to.
   */
  private async processBlockNodeChoice(nextNodeId: number): Promise<void> {
    const currentBlockNode = this.getCurrentBlockNode();
    if (currentBlockNode && !this.allChoicesDisabled(currentBlockNode)) {
      this.disableChoice(currentBlockNode, nextNodeId);
      await this.setNode(nextNodeId);
    }
  }

  /**
   * Checks if all choices in a node have been disabled.
   * @param node The dialogue node to check.
   */
  private allChoicesDisabled(node: DialogueNode): boolean {
    return node.choices?.every(choice => choice.disabled) ?? false;
  }

  /**
   * Disables a choice in the given block node.
   * @param node The block node containing the choice.
   * @param nextNodeId The ID of the next node associated with the choice to disable.
   */
  private disableChoice(node: DialogueNode, nextNodeId: number): void {
    if (node.choices) {
      node.choices = node.choices.map(choice =>
        choice.next === nextNodeId ? { ...choice, disabled: true } : choice
      );
      this.cdr.markForCheck();
    }
  }

  /**
   * Sets the current node and processes its content.
   * @param nodeId The ID of the node to set.
   * @param displayText Whether to display the node's text. Defaults to true.
   */
  async setNode(nodeId: number, displayText: boolean = true): Promise<void> {
    try {
      const node = this.dialogueService.getNode(nodeId);
      if (!node) {
        console.error(`Node with ID ${nodeId} not found.`);
        return;
      }

      // **Mark node as visited**
      this.visitedNodes.add(nodeId);

      this.currentNode = node;
      this.nextNodes = [];

      if (displayText) {
        await this.addTextWithAnimation(node.speaker, node.text);
      }

      if (node.type === 'block') {
        const currentBlockNode = this.getCurrentBlockNode();
        if (currentBlockNode?.id !== node.id) {
          this.blockNodeStack.push(node);
        }
      }

      if (node.choices) {
        this.prepareNextNodes(node);
      } else if (node.next) {
        // **Filter out already visited next nodes**
        const unvisitedNextNodeIds = node.next.filter(
          nextNodeId => !this.visitedNodes.has(nextNodeId)
        );

        if (unvisitedNextNodeIds.length > 0) {
          await this.processNextNodes(unvisitedNextNodeIds);
        } else {
          await this.handleEndOfDialogue();
        }
      } else {
        await this.handleEndOfDialogue();
      }

      this.cdr.markForCheck();
    } catch (error) {
      console.error(`Error setting node ${nodeId}:`, error);
    }
  }

  /**
   * Prepares the next set of choices for the dialogue.
   * @param node The current dialogue node.
   */
  private prepareNextNodes(node: DialogueNode): void {
    this.nextNodes = node.choices!
      .filter(choice => !choice.disabled)
      .map(choice => ({ id: choice.next, text: choice.text }));
    this.cdr.markForCheck();
  }

  /**
   * Processes a list of next node IDs sequentially, skipping already visited nodes.
   * @param nextNodeIds The IDs of the next nodes to process.
   */
  private async processNextNodes(nextNodeIds: number[]): Promise<void> {
    for (const nextNodeId of nextNodeIds) {
      if (!this.visitedNodes.has(nextNodeId)) {
        await this.setNode(nextNodeId);
      }
    }
  }

  /**
   * Handles the logic when the dialogue reaches an end.
   */
  private async handleEndOfDialogue(): Promise<void> {
    const currentBlockNode = this.getCurrentBlockNode();

    console.log("END OF CHOICE");

    if (currentBlockNode && this.allChoicesDisabled(currentBlockNode)) {
      if (currentBlockNode.next) {
        console.log("NEXT IN BLOCK");

        // **Filter out already visited next nodes**
        const unvisitedNextNodeIds = currentBlockNode.next.filter(
          nextId => !this.visitedNodes.has(nextId)
        );

        if (unvisitedNextNodeIds.length > 0) {
          // Pop the current block node from the stack
          this.blockNodeStack.pop();
          await this.setNode(unvisitedNextNodeIds[0]);
        } else {
          // No unvisited next nodes
          this.blockNodeStack.pop();
          console.log("END OF BLOCK");

          if (this.blockNodeStack.length > 0) {
            console.log("GOING BACK TO BLOCK BEFORE");
            console.log(this.blockNodeStack);

            // Re-enter the previous block without displaying text
            await this.setNode(this.getCurrentBlockNode()!.id, false);
          } else {
            console.log(this.blockNodeStack);
            // No more blocks, end dialogue or handle accordingly
            this.nextNodes = [];
            this.cdr.markForCheck();
          }
        }
      } else {
        // No next node specified, pop the block
        this.blockNodeStack.pop();
        console.log("END OF BLOCK");

        if (this.blockNodeStack.length > 0) {
          await this.setNode(this.getCurrentBlockNode()!.id, false);
        } else {
          this.nextNodes = [];
          this.cdr.markForCheck();
        }
      }
    } else if (currentBlockNode) {
      // If not all choices are disabled, stay in the current block
      console.log("STAYING IN BLOCK");
      await this.setNode(currentBlockNode.id, false); // Set displayText to false
    } else {
      // No current block node, end dialogue or handle accordingly
      this.nextNodes = [];
      this.cdr.markForCheck();
    }
  }

  /**
   * Scrolls the dialogue history container to the bottom.
   */
  private scrollToBottom(): void {
    try {
      this.dialogueHistoryContainer.nativeElement.scrollTop =
        this.dialogueHistoryContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll to bottom failed:', err);
    }
  }

  /**
   * Adds text to the dialogue history with a typing animation.
   * @param speaker The speaker of the dialogue.
   * @param text The text to display.
   */
  private addTextWithAnimation(speaker: string, text: string): Promise<void> {
    return new Promise((resolve) => {
      const words = text.split(' ');
      const visibleWords = Array(words.length).fill(false);
      this.animatedText.push({ speaker, words, visibleWords });
      this.animateText(this.animatedText.length - 1, resolve);
      this.cdr.markForCheck();
    });
  }

  /**
   * Animates the text display to simulate typing.
   * @param index The index of the text entry in the animatedText array.
   * @param resolve The resolve function to call when animation is complete.
   */
  private animateText(index: number, resolve: () => void): void {
    const entry = this.animatedText[index];
    entry.words.forEach((word, i) => {
      setTimeout(() => {
        entry.visibleWords[i] = true;
        this.cdr.markForCheck();
        if (i === entry.words.length - 1) {
          setTimeout(resolve, 200);
        }
      }, i * 10); // Adjusted delay for a more natural typing effect
    });
  }
}
