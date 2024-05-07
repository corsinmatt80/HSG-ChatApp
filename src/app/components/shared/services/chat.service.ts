import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../chat-bar/chat-bar.component';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly baseUrl = 'http://localhost:3000/';

  public constructor(private httpClient: HttpClient) {}

  public getChatMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.baseUrl}history`);
  }



  public addToHistory(message: Message): Observable<Message[]> {
    return this.httpClient.post<Message[]>(
      `${this.baseUrl}history`,
      message
    );
  }
}