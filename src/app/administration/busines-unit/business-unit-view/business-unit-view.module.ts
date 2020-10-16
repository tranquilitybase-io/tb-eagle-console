import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusinessUnitByIdResolver } from '@app/shared/resolvers/business-unit-by-id.resolver';
import { BusinessUnitViewComponent } from './business-unit-view.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: BusinessUnitViewComponent,
    resolve: {
      businessUnit: BusinessUnitByIdResolver
    }
  }
];

@NgModule({
  declarations: [BusinessUnitViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class BusinessUnitViewModule {}
