import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBadComponent } from './room-bad.component';

describe('RoomBadComponent', () => {
  let component: RoomBadComponent;
  let fixture: ComponentFixture<RoomBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
