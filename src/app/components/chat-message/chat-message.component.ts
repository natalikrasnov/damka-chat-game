import { Component, Input } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {
  @Input() isMyMessage: boolean = false; 
  @Input() message!: Message;

  getBackgroundColor =  'hwb(160 '+parseInt((Math.random() * 100)+"") +'%' + parseInt((Math.random() * 50)+"") + '%)';
  
  
}
