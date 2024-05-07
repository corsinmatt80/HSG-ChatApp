import { Component,DestroyRef,ElementRef,Input,ViewChild,inject,  } from '@angular/core';
import {Message} from '../chat-bar/chat-bar.component'
import { CommonModule, DatePipe} from '@angular/common';
import { EMPTY,tap,finalize, catchError } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.css'
})
export class ChatHistoryComponent {
  @Input() public history : Message[] = [];
  public chatMessages : Message[] = [];
  public errorMessage!: string;


 @ViewChild('scrollFrame') private scrollFrame!: ElementRef<HTMLElement>;
  private destroyRef = inject(DestroyRef);
  private chatService = inject(ChatService);

  ngOnInit(): void {
    this.getHistory();
    this.scrollTo();

    setInterval(() => {
      this.getHistory();
    }, 2000);
  }

  private getHistory(): void {
    this.chatService
      .getChatMessages()
      .pipe(
        tap((response: Message[]) => {
          this.chatMessages = response;
          this.scrollTo();
        }),
        finalize(() => console.log('done!')),
        takeUntilDestroyed(this.destroyRef),
        catchError((error: Error) => {
          this.errorMessage = error.message;
          console.error(error);

          return EMPTY;
        })
      )
      .subscribe();
  }

  private scrollTo(): void {
    this.scrollFrame?.nativeElement?.scroll({
      top: this.scrollFrame?.nativeElement?.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
