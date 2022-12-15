import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-room-new-message',
  templateUrl: './chat-room-new-message.component.html',
  styleUrls: ['./chat-room-new-message.component.css']
})
export class ChatRoomNewMessageComponent {
  @Output() addNewMessage = new EventEmitter<string>()
  message = ""


  onSendMessage = () => {
    this.addNewMessage.emit(this.message)
  }
}
