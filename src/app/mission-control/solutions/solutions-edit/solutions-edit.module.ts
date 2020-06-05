import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsEditComponent } from './solutions-edit.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule, MatCardModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: SolutionsEditComponent
  }
];

@NgModule({
  declarations: [SolutionsEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class SolutionsViewEditModule {}
