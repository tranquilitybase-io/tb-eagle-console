import { NgModule } from '@angular/core';
import { ApplicationsModule } from '../applications/applications.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import reducer, { featureKey } from './activator-store.reducer';
import { ActivatorStoreEffects } from './activator-store.effects';
import { ActivatorStoreComponent } from './activator-store.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';

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
    ApplicationsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ActivatorStoreEffects]),
    MatButtonModule,
    MatIconModule
  ]
})
export class ActivatorStoreModule {}
