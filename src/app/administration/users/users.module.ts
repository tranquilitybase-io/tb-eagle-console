import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { featureKey, usersReducer } from './users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users.effects';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users-home/users-home.module').then(m => m.UsersHomeModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./users-create/users-create.module').then(m => m.UsersCreateModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersModule {}
