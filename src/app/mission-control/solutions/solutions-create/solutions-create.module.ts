import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsCreateComponent } from './solutions-create.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule, MatDividerModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: SolutionsCreateComponent
  }
];

@NgModule({
  declarations: [SolutionsCreateComponent],
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
    MatCardModule,
    MatDividerModule
  ]
})
export class SolutionsCreateModule {}
