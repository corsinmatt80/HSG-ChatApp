import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Message{
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

public addToChat(name: string, message: string) {
  if (!name.trim() || !message.trim()) {
    this.errorMessage = "Name und Nachricht dürfen nicht leer sein.";
    return;
  }
  
  const nachricht: Message = {
    sender: name.trim(),
    message: message.trim(),
    timestamp: new Date()
  };
  this.messages.push(nachricht);
  this.message = "";
  this.errorMessage = ""; 
}
}
