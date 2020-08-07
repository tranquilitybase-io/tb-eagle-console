import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './teams.reducer';
import { TeamsEffects } from './teams.effects';
import { EffectsModule } from '@ngrx/effects';
import { BreadcrumbsURLs } from '@app/shared/breadcrumbs/breadcrumbs.component.model';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./teams-home/teams-home.module').then(m => m.TeamsHomeModule),
    data: {
      breadcrumbURL: BreadcrumbsURLs.TEAMS_HOME
    }
  },
  {
    path: 'create',
    loadChildren: () => import('./teams-create/teams-create.module').then(m => m.TeamsCreateModule),
    data: {
      breadcrumbURL: BreadcrumbsURLs.TEAMS_CREATE
    }
  },
  {
    path: 'edit',
    loadChildren: () => import('./teams-edit/teams-edit.module').then(m => m.TeamsEditModule),
    data: {
      breadcrumbURL: BreadcrumbsURLs.TEAMS_EDIT
    }
  },
  {
    path: 'view',
    loadChildren: () => import('./teams-view/teams-view.module').then(m => m.TeamsViewModule),
    data: {
      breadcrumbURL: BreadcrumbsURLs.TEAMS_VIEW
    }
  },
  {
    path: 'create-team-member',
    loadChildren: () =>
      import('../team-members/team-members-create/team-members-create.module').then(m => m.TeamMembersCreateModule),
    data: {
      breadcrumbURL: BreadcrumbsURLs.TEAMS__CREATE_TEAM_MEMBER
    }
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
