import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatorStoreHomeComponent } from './activator-store-home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { TeamResolver } from '@app/shared/resolvers/team.resolver';
import { ActivatorStoreHomeCategoryGridComponent } from './activator-store-home-category-grid/activator-store-home-category-grid.component';

import { ActivatorStoreHomeGridCardComponent } from './activator-store-home-grid/activator-store-home-grid-card/activator-store-home-grid-card.component';
import { ActivatorStoreHomeGridComponent } from './activator-store-home-grid/activator-store-home-grid.component';

import { ActivatorStoreDialogModule } from '../activator-store-dialog/activator-store-dialog.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatStepperModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatTooltipModule
} from '@angular/material';
import { ActivatorStoreHomeListComponent } from './activator-store-home-list/activator-store-home-list.component';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreHomeComponent,
    resolve: {
      teamList: TeamResolver
    }
  }
];

@NgModule({
  declarations: [
    ActivatorStoreHomeComponent,
    ActivatorStoreHomeGridComponent,
    ActivatorStoreHomeGridCardComponent,
    ActivatorStoreHomeCategoryGridComponent,
    ActivatorStoreHomeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ActivatorStoreDialogModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatTooltipModule
  ]
})
export class ActivatorStoreHomeModule {}
