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
        loadChildren: () => import('./sites-home/sites-home.module').then((m) => m.SitesHomeModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Sites',
              link: '/home',
            },
          ],
        },
      },
      {
        path: 'create',
        loadChildren: () => import('./sites-create/sites-create.module').then((m) => m.SitesCreateModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Create',
              link: '/create',
            },
            {
              name: 'Create',
            },
          ],
        },
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
  ],
})
export class HomeModule {}
