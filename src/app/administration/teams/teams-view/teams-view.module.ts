import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamMembersModule } from '@app/administration/team-members/team-members.module';

import { TeamsViewComponent } from './teams-view.component';
import { TeamsViewOverviewComponent } from './teams-view-overview/teams-view-overview.component';

import { TeamByIdResolver } from '@app/shared/resolvers/team-by-id.resolver';
import { TeamMembersByTeamIdResolver } from '@app/shared/resolvers/team-members-by-team-id.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TeamsViewComponent,
    resolve: {
      team: TeamByIdResolver,
      teamMembers: TeamMembersByTeamIdResolver
    }
  }
];

@NgModule({
  declarations: [TeamsViewComponent, TeamsViewOverviewComponent],
  imports: [
    CommonModule,
    TeamMembersModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    SharedModule
  ]
})
export class TeamsViewModule {}
