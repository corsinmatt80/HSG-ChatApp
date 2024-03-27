import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Message{
  sender:string;
  message:string;
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


public addToChat(name:string,message:string){
  const nachricht : Message = {
    sender: name,
    message: message
  }
  this.messages.push(nachricht);
  this.message = "";
}

}
