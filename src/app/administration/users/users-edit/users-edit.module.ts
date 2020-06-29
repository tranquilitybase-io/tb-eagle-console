import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { UsersEditComponent } from './users-edit.component';
import { UserByIdResolver } from '@app/shared/resolvers/user-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersEditComponent,
    resolve: {
      user: UserByIdResolver
    }
  }
];

@NgModule({
  declarations: [UsersEditComponent],
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
export class UsersEditModule {}
