import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActivatorsComponent } from './activators/activators.component';

const routes: Routes = [
  {
    path: '',
    component: ActivatorsComponent
  }
];

@NgModule({
  declarations: [ActivatorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActivatorsModule {}
