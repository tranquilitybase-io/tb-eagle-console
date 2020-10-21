import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { UsersHomeComponent } from './users-home.component';
import { UsersHomeGridCardComponent } from './users-home-grid/users-home-grid-card/users-home-grid-card.component';
import { UsersHomeGridComponent } from './users-home-grid/users-home-grid.component';
import { UsersHomeListComponent } from './users-home-list/users-home-list.component';
import { UsersHomeSelectComponent } from './users-home-select/users-home-select.component';

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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ]
})
export class UsersHomeModule {}
