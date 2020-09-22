import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { TeamMembersContainerComponent } from './team-members-container/team-members-container.component';
import { TeamMembersGridCardComponent } from './team-members-grid-card/team-members-grid-card.component';
import { TeamMembersGridComponent } from './team-members-grid/team-members-grid.component';
import { TeamMembersListComponent } from './team-members-list/team-members-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { TeamMembersEffects } from './team-members.effects';

@NgModule({
  declarations: [
    TeamMembersContainerComponent,
    TeamMembersGridCardComponent,
    TeamMembersGridComponent,
    TeamMembersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    EffectsModule.forFeature([TeamMembersEffects])
  ],
  exports: [TeamMembersContainerComponent, TeamMembersGridComponent, TeamMembersListComponent]
})
export class TeamMembersModule {}
