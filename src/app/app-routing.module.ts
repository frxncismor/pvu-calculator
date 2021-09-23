import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/calculator/calculator.module').then(
        (m) => m.CalculatorModule
      ),
  },
  {
    path: 'calculator',
    redirectTo: '',
  },
  {
    path: 'le-calculator',
    loadChildren: () =>
      import('./pages/le-calculator/le-calculator.module').then(
        (m) => m.LeCalculatorModule
      ),
  },
  {
    path: 'pvu-calculator',
    loadChildren: () =>
      import('./pages/pvu-calculator/pvu-calculator.module').then(
        (m) => m.PvuCalculatorModule
      ),
  },
  {
    path: 'garden-calculator',
    loadChildren: () =>
      import('./pages/garden-calculator/garden-calculator.module').then(
        (m) => m.GardenCalculatorModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
