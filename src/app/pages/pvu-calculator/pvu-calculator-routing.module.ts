import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvuCalculatorComponent } from './pvu-calculator.component';

const routes: Routes = [{ path: '', component: PvuCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvuCalculatorRoutingModule {}
