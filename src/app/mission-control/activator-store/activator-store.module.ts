import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import reducer, { featureKey } from './activator-store.reducer';
import { ActivatorStoreEffects } from './activator-store.effects';
import { ActivatorStoreComponent } from './activator-store.component';
import { SharedModule } from '@app/shared/shared.module';

import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./activator-store-home/activator-store-home.module').then(m => m.ActivatorStoreHomeModule)
      },
      {
        path: 'view',
        loadChildren: () =>
          import('./activator-store-view/activator-store-view.module').then(m => m.ActivatorStoreViewModule)
      },
      {
        path: 'create-app',
        loadChildren: () =>
          import('@app/mission-control/applications/applications-create/applications-create.module.ts').then(
            m => m.ApplicationsCreateModule
          )
      }
    ]
  }
];

@NgModule({
  declarations: [ActivatorStoreComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ActivatorStoreEffects]),
    MatButtonModule
  ]
})
export class ActivatorStoreModule {}
