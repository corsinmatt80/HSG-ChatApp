import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat-bar',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './chat-bar.component.html',
  styleUrl: './chat-bar.component.css'
})
export class ChatBarComponent {
public chatMessage="";
public errorMessage = "";
/**
 * addMessage to ChatBox
 */
public addMessage(message: string): void {
  if(message.length === 0){
    this.errorMessage = "Bitte einen Nachricht einfügen!"
  }
  alert(message);
}

}
