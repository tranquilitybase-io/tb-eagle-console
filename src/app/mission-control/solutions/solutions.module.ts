import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import reducer, { solutionFeatureKey } from './solutions.reducer';
import { SolutionEffects } from './solutions.effects';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./solutions-home/solutions-home.module').then((m) => m.SolutionsHomeModule),
    data: {
      breadcrumbsSteps: [
        {
          name: 'Solutions',
        },
      ],
    },
  },
  {
    path: 'create',
    loadChildren: () => import('./solutions-create/solutions-create.module').then((m) => m.SolutionsCreateModule),
    data: {
      breadcrumbsSteps: [
        {
          name: 'Solutions',
          link: '/mission-control/solutions',
        },
        {
          name: 'Create new Solution',
        },
      ],
    },
  },
  {
    path: 'edit',
    loadChildren: () => import('./solutions-edit/solutions-edit.module').then((m) => m.SolutionsViewEditModule),
  },
  {
    path: 'view',
    loadChildren: () => import('./solutions-view/solutions-view.module').then((m) => m.SolutionsViewModule),
    data: {
      breadcrumbsSteps: [
        {
          name: 'Solutions',
          link: '/mission-control/solutions',
        },
        {
          name: 'View',
        },
      ],
    },
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(solutionFeatureKey, reducer),
    EffectsModule.forFeature([SolutionEffects]),
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class SolutionsModule {}
