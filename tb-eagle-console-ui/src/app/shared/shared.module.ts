import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    IconComponent,
    RouterModule
  ]
})
export class SharedModule { }
