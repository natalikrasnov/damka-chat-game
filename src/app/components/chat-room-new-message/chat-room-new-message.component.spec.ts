import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomNewMessageComponent } from './chat-room-new-message.component';

describe('ChatRoomNewMessageComponent', () => {
  let component: ChatRoomNewMessageComponent;
  let fixture: ComponentFixture<ChatRoomNewMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomNewMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatRoomNewMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
