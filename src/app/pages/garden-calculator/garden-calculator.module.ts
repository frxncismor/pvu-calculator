import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GardenCalculatorRoutingModule } from './garden-calculator-routing.module';
import { GardenCalculatorComponent } from './garden-calculator.component';

@NgModule({
  declarations: [GardenCalculatorComponent],
  imports: [CommonModule, GardenCalculatorRoutingModule],
})
export class GardenCalculatorModule {}
