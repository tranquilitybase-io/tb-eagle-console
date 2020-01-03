import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AllComponent
  ]
})
export class AllModule { }
