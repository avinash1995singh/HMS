import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHospitalDetailsComponent } from './add-hospital-details.component';

describe('AddHospitalDetailsComponent', () => {
  let component: AddHospitalDetailsComponent;
  let fixture: ComponentFixture<AddHospitalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHospitalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHospitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
