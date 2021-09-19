import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const components = [HeaderComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [components],
})
export class ComponentsModule {}
