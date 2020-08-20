import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsEditComponent } from './teams-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusinessUnitResolver } from '@app/shared/resolvers/business-unit.resolver';
import { TeamByIdResolver } from '@app/shared/resolvers/team-by-id.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TeamsEditComponent,
    resolve: {
      businessUnitList: BusinessUnitResolver,
      team: TeamByIdResolver
    }
  }
];

@NgModule({
  declarations: [TeamsEditComponent],
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
    SharedModule
  ]
})
export class TeamsEditModule {}
