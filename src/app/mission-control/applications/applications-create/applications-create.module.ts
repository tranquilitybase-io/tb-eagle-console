import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ApplicationsCreateComponent } from './applications-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ActivatorStoreDialogModule } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog.module';

import { ActivatorByIdResolver } from '@app/shared/resolvers/activator-by-id.resolver';
import { ActiveSolutionsResolver } from '@app/shared/resolvers/active-solutions.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsCreateComponent,
    resolve: {
      activator: ActivatorByIdResolver,
      availableSolutions: ActiveSolutionsResolver
    }
  }
];

@NgModule({
  declarations: [ApplicationsCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ActivatorStoreDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ApplicationsCreateModule {}