import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomBadComponent } from './add-room-bad.component';

describe('AddRoomBadComponent', () => {
  let component: AddRoomBadComponent;
  let fixture: ComponentFixture<AddRoomBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomBadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoomBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
