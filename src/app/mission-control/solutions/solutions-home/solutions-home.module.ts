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
import { SolutionsViewEditComponent } from '../solutions-view-edit/solutions-view-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

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
    SolutionsViewEditComponent
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
    // temporary to check out vie-edit:
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule
  ]
})
export class SolutionsHomeModule {}
