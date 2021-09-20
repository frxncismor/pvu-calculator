import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvuCalculatorRoutingModule } from './pvu-calculator-routing.module';
import { PvuCalculatorComponent } from './pvu-calculator.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PvuCalculatorComponent],
  imports: [
    CommonModule,
    PvuCalculatorRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class PvuCalculatorModule {}
