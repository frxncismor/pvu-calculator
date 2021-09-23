import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCalculatorComponent } from './garden-calculator.component';

describe('GardenCalculatorComponent', () => {
  let component: GardenCalculatorComponent;
  let fixture: ComponentFixture<GardenCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
