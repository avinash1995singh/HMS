import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDComponent } from './ipd.component';

describe('IPDComponent', () => {
  let component: IPDComponent;
  let fixture: ComponentFixture<IPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
