import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceGroupComponent } from './add-service-group.component';

describe('AddServiceGroupComponent', () => {
  let component: AddServiceGroupComponent;
  let fixture: ComponentFixture<AddServiceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
