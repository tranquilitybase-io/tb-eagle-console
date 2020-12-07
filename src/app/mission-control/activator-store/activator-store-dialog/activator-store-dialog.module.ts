import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatorStoreDialogMissingSolutionsComponent } from './activator-store-dialog-missing-solutions/activator-store-dialog-missing-solutions.component';
import { ActivatorStoreDialogGrantAccessComponent } from './activator-store-dialog-grant-access/activator-store-dialog-grant-access.component';
import { ActivatorStoreDialogCreateComponent } from './activator-store-dialog-create/activator-store-dialog-create.component';
import { ActivatorStoreDialogCreateOnboardingComponent } from './activator-store-dialog-create-onboarding/activator-store-dialog-create-onboarding.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ActivatorStoreDialogMissingSolutionsComponent,
    ActivatorStoreDialogGrantAccessComponent,
    ActivatorStoreDialogCreateComponent,
    ActivatorStoreDialogCreateOnboardingComponent
  ],
  entryComponents: [
    ActivatorStoreDialogMissingSolutionsComponent,
    ActivatorStoreDialogGrantAccessComponent,
    ActivatorStoreDialogCreateComponent,
    ActivatorStoreDialogCreateOnboardingComponent
  ],
  exports: [
    ActivatorStoreDialogMissingSolutionsComponent,
    ActivatorStoreDialogGrantAccessComponent,
    ActivatorStoreDialogCreateComponent,
    ActivatorStoreDialogCreateOnboardingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class ActivatorStoreDialogModule {}
