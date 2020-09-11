import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { SolutionSelectComponent } from './solution-select/solution-select.component';
import { SolutionsHomeComponent } from './solutions-home.component';
import { SolutionsHomeGridCardComponent } from './solutions-home-grid/solutions-home-grid-card/solutions-home-grid-card.component';
import { SolutionsHomeGridComponent } from './solutions-home-grid/solutions-home-grid.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { SolutionsHomeListComponent } from './solutions-home-list/solutions-home-list.component';
import {
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatTooltipModule
} from '@angular/material';

import { LandingZoneDialogModule } from './solutions-home-dialog/solutions-home-dialog.module';

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
    SolutionsHomeListComponent
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
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDialogModule,
    LandingZoneDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatTooltipModule
  ]
})
export class SolutionsHomeModule {}
