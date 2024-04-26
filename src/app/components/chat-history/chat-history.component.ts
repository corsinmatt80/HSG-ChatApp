import { Component, Input } from '@angular/core';
import {Message} from '../chat-bar/chat-bar.component'
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.css'
})
export class ChatHistoryComponent {
  @Input() public history : Message[] = [];
}
