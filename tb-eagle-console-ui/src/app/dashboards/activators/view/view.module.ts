import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { ActivatorComponent } from './activator/activator.component';
import { ActivatorContainerComponent } from './activator-container/activator-container.component';
import { DeploymentsComponent } from './deployments/deployments.component';

const routes: Routes = [
  {
    path: '',
    component: ActivatorContainerComponent
  }
];

@NgModule({
  declarations: [
    ActivatorComponent,
    ActivatorContainerComponent,
    DeploymentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewModule { }
