import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { UsersHomeComponent } from './users-home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { UsersHomeGridComponent } from './users-home-grid/users-home-grid.component';
import { UsersHomeGridCardComponent } from './users-home-grid-card/users-home-grid-card.component';

const routes: Routes = [
  {
    path: '',
    component: UsersHomeComponent
  }
];

@NgModule({
  declarations: [UsersHomeComponent, UsersHomeGridComponent, UsersHomeGridCardComponent],
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
    MatListModule
  ]
})
export class UsersHomeModule {}
