import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { TeamsHomeComponent } from './teams-home.component';
import { TeamsHomeGridComponent } from './teams-home-grid/teams-home-grid.component';
import { TeamsHomeGridCardComponent } from './teams-home-grid/teams-home-grid-card/teams-home-grid-card.component';
import { TeamsSelectComponent } from './teams-select/teams-select.component';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { TeamsHomeListComponent } from './teams-home-list/teams-home-list.component';
import {
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatTooltipModule
} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: TeamsHomeComponent
  }
];

@NgModule({
  declarations: [
    TeamsHomeComponent,
    TeamsHomeGridComponent,
    TeamsHomeGridCardComponent,
    TeamsSelectComponent,
    TeamsHomeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatTooltipModule
  ]
})
export class TeamsHomeModule {}
