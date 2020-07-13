import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TeamsViewComponent } from './teams-view.component';
import { TeamsViewOverviewComponent } from './teams-view-overview/teams-view-overview.component';
import { TeamsViewTeamMembersComponent } from './teams-view-team-members/teams-view-team-members.component';

import { TeamByIdResolver } from '@app/shared/resolvers/team-by-id.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: TeamsViewComponent,
    resolve: {
      team: TeamByIdResolver
    }
  }
];

@NgModule({
  declarations: [TeamsViewComponent, TeamsViewOverviewComponent, TeamsViewTeamMembersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ]
})
export class TeamsViewModule {}
