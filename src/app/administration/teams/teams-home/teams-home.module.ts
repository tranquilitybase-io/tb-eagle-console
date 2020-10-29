import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { TeamsHomeComponent } from './teams-home.component';
import { TeamsHomeGridCardComponent } from './teams-home-grid/teams-home-grid-card/teams-home-grid-card.component';
import { TeamsHomeGridComponent } from './teams-home-grid/teams-home-grid.component';
import { TeamsHomeListComponent } from './teams-home-list/teams-home-list.component';
import { TeamsSelectComponent } from './teams-select/teams-select.component';

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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule
  ]
})
export class TeamsHomeModule {}
