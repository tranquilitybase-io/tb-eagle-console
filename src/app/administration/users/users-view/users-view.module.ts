import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { UsersViewComponent } from './users-view.component';
import { UserByIdResolver } from '@app/shared/resolvers/user-by-id.resolver';
import { MatCardModule, MatListModule, MatChipsModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: UsersViewComponent,
    resolve: {
      user: UserByIdResolver
    }
  }
];

@NgModule({
  declarations: [UsersViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatChipsModule
  ]
})
export class UsersViewModule {}
