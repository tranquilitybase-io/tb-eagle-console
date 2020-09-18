import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users.effects';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users-home/users-home.module').then(m => m.UsersHomeModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./users-create/users-create.module').then(m => m.UsersCreateModule),
    data: {
      breadcrumbsSteps: [
        {
          name: 'Users',
          link: '/administration/users'
        },
        {
          name: 'Create new user'
        }
      ]
    }
  },
  {
    path: 'edit',
    loadChildren: () => import('./users-edit/users-edit.module').then(m => m.UsersEditModule),
    data: {
      breadcrumbsSteps: [
        {
          name: 'Users',
          link: '/administration/users'
        },
        {
          name: 'Edit'
        }
      ]
    }
  },
  {
    path: 'view',
    loadChildren: () => import('./users-view/users-view.module').then(m => m.UsersViewModule),
    data: {
      breadcrumbsSteps: [
        {
          name: 'Users',
          link: '/administration/users'
        },
        {
          name: 'View'
        }
      ]
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersModule {}
