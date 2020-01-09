import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { AllComponent } from './all/all.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [
    AllComponent,
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AllComponent
  ]
})
export class AllModule { }
