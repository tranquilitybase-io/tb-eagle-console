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
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material';
import { ActivatorStoreGuard } from '@app/guards/activator-store-guard';
import { ActivatorStoreDialogModule } from './activator-store-dialog/activator-store-dialog.module';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreComponent,
    canDeactivate: [ActivatorStoreGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./activator-store-home/activator-store-home.module').then(m => m.ActivatorStoreHomeModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Activator Store'
            }
          ]
        }
      },
      {
        path: 'view',
        loadChildren: () =>
          import('./activator-store-view/activator-store-view.module').then(m => m.ActivatorStoreViewModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Activator Store',
              link: '/mission-control/activator-store'
            },
            {
              name: 'View'
            }
          ]
        }
      },
      {
        path: 'create-app',
        loadChildren: () =>
          import('@app/mission-control/applications/applications-create/applications-create.module.ts').then(
            m => m.ApplicationsCreateModule
          )
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./activator-store-create/activator-store-create.module').then(m => m.ActivatorStoreCreateModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Activator Store',
              link: '/mission-control/activator-store'
            },
            {
              name: 'Create'
            }
          ]
        }
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
    MatIconModule,
    MatStepperModule
  ]
})
export class ActivatorStoreModule {}
