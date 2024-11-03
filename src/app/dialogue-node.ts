export interface DialogueNode {
  id: number;
  speaker: string;
  text: string;
  next?: number[];
  choices?: { text: string, next: number, direct?:true, disabled?: boolean;}[];
  type?:'block' | 'dead end';
}

export interface DialogueChoice {
  id: number;
  text: string;
}