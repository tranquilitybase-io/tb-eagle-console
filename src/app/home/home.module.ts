import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./landing-zones-list/landing-zones-list.module').then(m => m.LandingZonesListModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Home',
              link: '/home'
            }
          ]
        }
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./landing-zones-create/landing-zones-create.module').then(m => m.LandingZonesCreateModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Home',
              link: '/home'
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
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), MatButtonModule, MatIconModule, MatStepperModule]
})
export class HomeModule {}
