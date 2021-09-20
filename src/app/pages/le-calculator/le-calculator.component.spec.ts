import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeCalculatorComponent } from './le-calculator.component';

describe('LeCalculatorComponent', () => {
  let component: LeCalculatorComponent;
  let fixture: ComponentFixture<LeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
