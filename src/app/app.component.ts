import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueComponent } from './dialogue/dialogue.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DialogueComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}
