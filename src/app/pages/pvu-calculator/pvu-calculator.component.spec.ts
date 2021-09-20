import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvuCalculatorComponent } from './pvu-calculator.component';

describe('PvuCalculatorComponent', () => {
  let component: PvuCalculatorComponent;
  let fixture: ComponentFixture<PvuCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvuCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvuCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
