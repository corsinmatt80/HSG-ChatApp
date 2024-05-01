import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nickname',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './nickname.component.html',
  styleUrl: './nickname.component.css'
})
export class NicknameComponent {
  @Output() public nicknameCreate = new EventEmitter<string>();
  @Output() public isEntered = new EventEmitter<boolean>();

  public nickname = '';
  public message = '';
  public showUsername = false;

  public createNickname(nickname: string, showing: boolean): void {
    this.showUsername = showing;
    this.nicknameCreate.emit(nickname);
  }
}
