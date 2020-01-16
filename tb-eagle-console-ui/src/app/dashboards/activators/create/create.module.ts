import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { CreateComponent } from './create/create.component';
import { SharedModule as ActivatorsSharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent
  }
];

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), ActivatorsSharedModule]
})
export class CreateModule {}
