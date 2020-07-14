import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamMembersGridComponent } from './team-members-grid/team-members-grid.component';
import { TeamMembersViewComponent } from './team-members-view/team-members-view.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TeamMembersGridComponent, TeamMembersViewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [TeamMembersGridComponent]
})
export class TeamMembersModule {}
