import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DamkaComponent } from './components/damka/damka.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatRoomUsersComponent } from './components/chat-room-users/chat-room-users.component';
import { ChatRoomMainComponent } from './components/chat-room-main/chat-room-main.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { SearchComponent } from './components/search/search.component';
import { ChatRoomNewMessageComponent } from './components/chat-room-new-message/chat-room-new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    DamkaComponent,
    HeaderComponent,
    ChatRoomComponent,
    FooterComponent,
    ChatRoomUsersComponent,
    ChatRoomMainComponent,
    ChatMessageComponent,
    SearchComponent,
    ChatRoomNewMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
