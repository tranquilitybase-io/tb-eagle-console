import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsCreateComponent } from './teams-create.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusinessUnitResolver } from '@app/shared/resolvers/business-unit.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: TeamsCreateComponent,
    resolve: {
      businessUnitList: BusinessUnitResolver
    }
  }
];

@NgModule({
  declarations: [TeamsCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TeamsCreateModule {}
