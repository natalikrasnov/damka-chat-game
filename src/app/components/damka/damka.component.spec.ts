import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamkaComponent } from './damka.component';

describe('DamkaComponent', () => {
  let component: DamkaComponent;
  let fixture: ComponentFixture<DamkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
