import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { ActivatorsComponent } from './activators/activators.component';
import { ControlsComponent } from './controls/controls.component';
import { CategorySwitchComponent } from './category-switch/category-switch.component';

const routes: Routes = [
  {
    path: '',
    component: ActivatorsComponent
  }
];

@NgModule({
  declarations: [ActivatorsComponent, ControlsComponent, CategorySwitchComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ActivatorsModule {}
