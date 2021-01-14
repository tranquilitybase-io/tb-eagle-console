import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { SolutionSelectComponent } from './solution-select/solution-select.component';
import { SolutionsHomeComponent } from './solutions-home.component';
import { SolutionsHomeGridCardComponent } from './solutions-home-grid/solutions-home-grid-card/solutions-home-grid-card.component';
import { SolutionsHomeGridComponent } from './solutions-home-grid/solutions-home-grid.component';
import { SolutionsHomeListComponent } from './solutions-home-list/solutions-home-list.component';
import { SolutionsHomeListFilterComponent } from './solutions-home-list-filter/solutions-home-list-filter.component';

import { LandingZoneDialogModule } from './solutions-home-dialog/solutions-home-dialog.module';

import { MatButtonModule } from '@angular/material/button';
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
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
  {
    path: '',
    component: SolutionsHomeComponent
  }
];

@NgModule({
  declarations: [
    SolutionSelectComponent,
    SolutionsHomeComponent,
    SolutionsHomeGridCardComponent,
    SolutionsHomeGridComponent,
    SolutionsHomeListComponent,
    SolutionsHomeListFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    LandingZoneDialogModule,
    MatButtonModule,
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
    MatTableModule,
    MatTooltipModule
  ]
})
export class SolutionsHomeModule {}
