import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@app/shared/shared.module';

import { ActivatorComponent } from './activator/activator.component';
import { ActivatorContainerComponent } from './activator-container/activator-container.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import reducer, { featureKey } from './view.reducer';
import { ViewEffects } from './view.effects';
import { SharedModule as ActivatorsSharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ActivatorContainerComponent
  }
];

@NgModule({
  declarations: [ActivatorComponent, ActivatorContainerComponent, DeploymentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ViewEffects]),
    ActivatorsSharedModule
  ]
})
export class ViewModule {}
