import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SolutionsComponent } from './solutions/solutions.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionsComponent
  }
];

@NgModule({
  declarations: [SolutionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SolutionsModule { }
