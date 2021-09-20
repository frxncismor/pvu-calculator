import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeCalculatorRoutingModule } from './le-calculator-routing.module';
import { LeCalculatorComponent } from './le-calculator.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LeCalculatorComponent],
  imports: [
    CommonModule,
    LeCalculatorRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class LeCalculatorModule {}
