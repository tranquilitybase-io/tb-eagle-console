import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateComponent } from './create/create.component';
import { SharedModule as ActivatorsSharedModule } from '../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatorByIdResolver } from '../resolvers/activator-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
    resolve: {
      activator: ActivatorByIdResolver
    }
  }
];

@NgModule({
  declarations: [CreateComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ActivatorsSharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class CreateModule {}
