import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomMainComponent } from './chat-room-main.component';

describe('ChatRoomMainComponent', () => {
  let component: ChatRoomMainComponent;
  let fixture: ComponentFixture<ChatRoomMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatRoomMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
