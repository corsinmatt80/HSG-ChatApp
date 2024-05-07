import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, DestroyRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../shared/services/chat.service';
import { EMPTY,tap,finalize, takeUntil, catchError } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface Message{
  nickname:string;
  message:string;
  createdAt: Date; //timestamp
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
public saving = false;
private destroyRef = inject(DestroyRef);
constructor(private chatService: ChatService) {}

public addToChat(nickname: string, message: string) {
  if (!nickname.trim() || !message.trim()) {
    this.errorMessage = "Name und Nachricht dürfen nicht leer sein.";
    return;
  }
  
  const nachricht: Message = {
    nickname: nickname.trim(),
    message: message.trim(),
    createdAt: new Date()
  };
  

  this.saving = true;
  this.chatService
  .addToHistory(nachricht)
  .pipe(
    tap(() => {
      this.message = '';
      this.errorMessage = '';
    }),
    finalize(() => (this.saving = false)),
    takeUntilDestroyed(this.destroyRef),
    catchError((error: Error) =>{
      this.errorMessage = error.message;
      console.error(error);
      return EMPTY;
    })
  ).subscribe();
}
}
