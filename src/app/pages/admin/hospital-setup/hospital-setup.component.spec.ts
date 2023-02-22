import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSetupComponent } from './hospital-setup.component';

describe('HospitalSetupComponent', () => {
  let component: HospitalSetupComponent;
  let fixture: ComponentFixture<HospitalSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
