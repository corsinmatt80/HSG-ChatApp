
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatBarComponent } from './components/chat-bar/chat-bar.component';
import { Component } from '@angular/core';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';

interface Message {
  sender: string;
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ChatBarComponent,ChatHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatapp_hsg';
  chatHistory: Message[] = [];
  public messageSend(message : Message):void{
    this.chatHistory.push(message);
  }
}

