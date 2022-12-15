import { Component, Input } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room-main',
  templateUrl: './chat-room-main.component.html',
  styleUrls: ['./chat-room-main.component.css']
})
export class ChatRoomMainComponent {
  @Input() messages!: Message[]
  @Input() myUser!: User;

  addNewMessage = (newMessage: string) => {
    this.messages.push({
      user: this.myUser,
      message: newMessage
    })
  }
}
