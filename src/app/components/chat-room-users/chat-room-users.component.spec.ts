import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomUsersComponent } from './chat-room-users.component';

describe('ChatRoomUsersComponent', () => {
  let component: ChatRoomUsersComponent;
  let fixture: ComponentFixture<ChatRoomUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatRoomUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
