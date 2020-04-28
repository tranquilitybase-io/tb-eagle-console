import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ActivatorStoreViewComponent } from './activator-store-view.component';
import { ActivatorByIdResolver } from '@app/shared/resolvers/activator-by-id.resolver';
import { DeploymentsComponent } from './deployments/deployments.component';
import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './view.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ViewEffects } from './view.effects';
import { DeploymentsService } from './deployments.service';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreViewComponent,
    resolve: {
      activator: ActivatorByIdResolver
    }
  }
];

@NgModule({
  declarations: [ActivatorStoreViewComponent, DeploymentsComponent],
  providers: [DeploymentsService],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ViewEffects])
  ]
})
export class ActivatorStoreViewModule {}
