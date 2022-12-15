import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room-users',
  templateUrl: './chat-room-users.component.html',
  styleUrls: ['./chat-room-users.component.css']
})
  
export class ChatRoomUsersComponent implements OnInit{
 
  @Input() users!: User[];
  usersToDisplay : User[] = []
 
  ngOnInit(): void {
    this.usersToDisplay = this.users
  }
  
  onUserSearch = (users: string) => {
    this.usersToDisplay = this.users.filter(user =>
      user.userName.includes(users)
    )
  }

}
