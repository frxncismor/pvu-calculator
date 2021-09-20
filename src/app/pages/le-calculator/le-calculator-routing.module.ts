import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeCalculatorComponent } from './le-calculator.component';

const routes: Routes = [{ path: '', component: LeCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeCalculatorRoutingModule {}
