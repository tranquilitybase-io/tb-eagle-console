import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatorStoreHomeComponent } from './activator-store-home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { TeamResolver } from '@app/shared/resolvers/team.resolver';
import { ActivatorStoreHomeCategoryGridComponent } from './activator-store-home-category-grid/activator-store-home-category-grid.component';

import { ActivatorStoreHomeGridCardComponent } from './activator-store-home-grid/activator-store-home-grid-card/activator-store-home-grid-card.component';
import { ActivatorStoreHomeGridComponent } from './activator-store-home-grid/activator-store-home-grid.component';
import { ActivatorStoreHomeListComponent } from './activator-store-home-list/activator-store-home-list.component';
import { ActivatorStoreHomeListFilterComponent } from './activator-store-home-list-filter/activator-store-home-list-filter.component';

import { ActivatorStoreDialogModule } from '../activator-store-dialog/activator-store-dialog.module';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LayoutModule } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreHomeComponent,
    resolve: {
      teamList: TeamResolver,
    },
  },
];

@NgModule({
  declarations: [
    ActivatorStoreHomeCategoryGridComponent,
    ActivatorStoreHomeComponent,
    ActivatorStoreHomeGridCardComponent,
    ActivatorStoreHomeGridComponent,
    ActivatorStoreHomeListComponent,
    ActivatorStoreHomeListFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ActivatorStoreDialogModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatDividerModule,
    LayoutModule,
    MatExpansionModule,
  ],
})
export class ActivatorStoreHomeModule {}
