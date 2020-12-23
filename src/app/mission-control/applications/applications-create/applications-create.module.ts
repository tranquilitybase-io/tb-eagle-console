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
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ApplicationsCreateReviewComponent } from './applications-create-review/applications-create-review.component';

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
  declarations: [ApplicationsCreateComponent, ApplicationsCreateReviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ActivatorStoreDialogModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule
  ]
})
export class ApplicationsCreateModule {}
