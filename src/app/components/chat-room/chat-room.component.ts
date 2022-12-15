import { Component, Input } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  myUser: User = {
    userName: "natali",
    id: "07"
  }
  users: User[] = [
    {
      userName: "kyle",
      id: "01"
    },
    {
      userName: "ilana",
      id: "02"
    },{
      userName: "mama",
      id: "03"
    },
    {
      userName: "gena",
      id: "04"
    },{
      userName: "papa",
      id: "05"
    },
    {
      userName: "beky",
      id: "06"
    },
  ]

  messages: Message[] = [{
    user: {
      userName: "ilana",
      id: "02"
    },
    message: "hi"
  }, {
    user:{ userName: "gena", id: "04"},
    message: "hello"
    },
    {
      user: this.myUser,
      message: "welcome"
    }
  ]
}
