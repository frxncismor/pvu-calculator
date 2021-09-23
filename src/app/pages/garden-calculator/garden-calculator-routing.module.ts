import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GardenCalculatorComponent } from './garden-calculator.component';

const routes: Routes = [{ path: '', component: GardenCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardenCalculatorRoutingModule {}
