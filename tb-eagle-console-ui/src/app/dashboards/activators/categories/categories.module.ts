import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
