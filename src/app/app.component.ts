
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatBarComponent } from './components/chat-bar/chat-bar.component';
import { Component, OnInit } from '@angular/core';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { NicknameComponent } from './components/nickname/nickname.component';
import { NgIf } from '@angular/common';

interface Message {
  nickname: string;
  message: string;
  createdAt: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ChatBarComponent,ChatHistoryComponent, NicknameComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatapp_hsg';
  public nickname = "";
  public isEntered = false;
  chatHistory: Message[] = [];
  public messageSend(message : Message):void{
    this.chatHistory.push(message);
  }
}

