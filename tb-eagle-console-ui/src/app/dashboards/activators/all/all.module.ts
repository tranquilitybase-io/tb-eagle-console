import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllComponent } from './all/all.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [AllComponent, ApplicationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AllComponent
  ]
})
export class AllModule { }
