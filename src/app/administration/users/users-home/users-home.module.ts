import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { UsersHomeComponent } from './users-home.component';
import { UsersHomeGridCardComponent } from './users-home-grid/users-home-grid-card/users-home-grid-card.component';
import { UsersHomeGridComponent } from './users-home-grid/users-home-grid.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { UsersHomeListComponent } from './users-home-list/users-home-list.component';
import { UsersHomeSelectComponent } from './users-home-select/users-home-select.component';
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
    component: UsersHomeComponent
  }
];

@NgModule({
  declarations: [
    UsersHomeComponent,
    UsersHomeGridComponent,
    UsersHomeGridCardComponent,
    UsersHomeListComponent,
    UsersHomeSelectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatTooltipModule
  ]
})
export class UsersHomeModule {}
