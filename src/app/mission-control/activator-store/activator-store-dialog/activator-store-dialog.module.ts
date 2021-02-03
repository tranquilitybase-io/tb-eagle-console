import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatorStoreDialogCreateComponent } from './activator-store-dialog-create/activator-store-dialog-create.component';
import { ActivatorStoreDialogCreateOnboardingComponent } from './activator-store-dialog-create-onboarding/activator-store-dialog-create-onboarding.component';
import { ActivatorStoreDialogGrantAccessComponent } from './activator-store-dialog-grant-access/activator-store-dialog-grant-access.component';
import { ActivatorStoreDialogMissingSolutionsComponent } from './activator-store-dialog-missing-solutions/activator-store-dialog-missing-solutions.component';
import { ActivatorStoreFilterCreateComponent } from './activator-store-dialog-filter/activator-store-dialog-filter.component';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ActivatorStoreDialogCreateComponent,
    ActivatorStoreDialogCreateOnboardingComponent,
    ActivatorStoreDialogGrantAccessComponent,
    ActivatorStoreDialogMissingSolutionsComponent,
    ActivatorStoreFilterCreateComponent,
  ],
  entryComponents: [
    ActivatorStoreDialogCreateComponent,
    ActivatorStoreDialogCreateOnboardingComponent,
    ActivatorStoreDialogGrantAccessComponent,
    ActivatorStoreDialogMissingSolutionsComponent,
    ActivatorStoreFilterCreateComponent,
  ],
  exports: [
    ActivatorStoreDialogCreateComponent,
    ActivatorStoreDialogCreateOnboardingComponent,
    ActivatorStoreDialogGrantAccessComponent,
    ActivatorStoreDialogMissingSolutionsComponent,
    ActivatorStoreFilterCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ActivatorStoreDialogModule {}
