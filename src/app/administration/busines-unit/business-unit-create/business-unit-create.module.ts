import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BusinessUnitCreateComponent } from './business-unit-create.component';

import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BusinessUnitCreateComponent,
  },
];

@NgModule({
  declarations: [BusinessUnitCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
  ],
})
export class BusinessUnitCreateModule {}
