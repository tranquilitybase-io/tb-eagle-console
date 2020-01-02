import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
];

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoriesModule { }
