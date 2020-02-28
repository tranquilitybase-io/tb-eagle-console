import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@app/shared/shared.module';

import { ViewComponent } from './view.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import reducer, { featureKey } from './view.reducer';
import { ViewEffects } from './view.effects';
import { ActivatorByIdResolver } from '../resolvers/activator-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    resolve: {
      activator: ActivatorByIdResolver
    }
  }
];

@NgModule({
  declarations: [ViewComponent, DeploymentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ViewEffects])
  ]
})
export class ViewModule {}
