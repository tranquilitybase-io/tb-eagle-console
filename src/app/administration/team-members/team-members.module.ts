import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamMembersGridComponent } from './team-members-grid/team-members-grid.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TeamMembersListComponent } from './team-members-list/team-members-list.component';
import { TeamMembersContainerComponent } from './team-members-container/team-members-container.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { TeamMembersGridCardComponent } from './team-members-grid-card/team-members-grid-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    TeamMembersGridComponent,
    TeamMembersListComponent,
    TeamMembersContainerComponent,
    TeamMembersGridCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatChipsModule,
    SharedModule
  ],
  exports: [TeamMembersGridComponent, TeamMembersListComponent, TeamMembersContainerComponent]
})
export class TeamMembersModule {}
