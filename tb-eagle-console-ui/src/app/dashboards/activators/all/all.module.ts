import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AllComponent } from './all/all.component';

const routes: Routes = [
  {
    path: '',
    component: AllComponent
  }
];

@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AllModule { }
