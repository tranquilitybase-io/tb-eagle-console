import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMembersCreateComponent } from './team-members-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: TeamMembersCreateComponent
    // resolve: {
    //   activator: ActivatorByIdResolver,
    //   availableSolutions: ActiveSolutionsResolver
    // }
  }
];

@NgModule({
  declarations: [TeamMembersCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class TeamMembersCreateModule {}
