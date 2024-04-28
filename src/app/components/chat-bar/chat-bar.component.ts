import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


export interface Message{
  sender:string;
  message:string;
  timestamp: Date; //timestamp
}


@Component({
  selector: 'app-chat-bar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './chat-bar.component.html',
  styleUrl: './chat-bar.component.css'
})



export class ChatBarComponent {
public message="";
public errorMessage = "";
public name = "";
public messages:Message[] = [];
@Output() public messageToSend = new EventEmitter<Message>();
@Input() public nickname = "";

public addToChat(nickname: string, message: string) {
  if (!nickname.trim() || !message.trim()) {
    this.errorMessage = "Name und Nachricht dürfen nicht leer sein.";
    return;
  }
  
  const nachricht: Message = {
    sender: nickname.trim(),
    message: message.trim(),
    timestamp: new Date()
  };
  this.messages.push(nachricht);
  this.messageToSend.emit(nachricht);
  this.message = "";
  this.errorMessage = ""; 
}
}
