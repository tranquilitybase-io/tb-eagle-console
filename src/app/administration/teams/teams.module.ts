import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './teams.reducer';
import { TeamsEffects } from './teams.effects';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./teams-home/teams-home.module').then(m => m.TeamsHomeModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./teams-create/teams-create.module').then(m => m.TeamsCreateModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./teams-edit/teams-edit.module').then(m => m.TeamsEditModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./teams-view/teams-view.module').then(m => m.TeamsViewModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([TeamsEffects])
  ]
})
export class TeamsModule {}
