import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatorStoreDialogMissingSolutionsComponent } from './activator-store-dialog-missing-solutions/activator-store-dialog-missing-solutions.component';
import { ActivatorStoreDialogGrantAccessComponent } from './activator-store-dialog-grant-access/activator-store-dialog-grant-access.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ActivatorStoreDialogMissingSolutionsComponent, ActivatorStoreDialogGrantAccessComponent],
  entryComponents: [ActivatorStoreDialogMissingSolutionsComponent, ActivatorStoreDialogGrantAccessComponent],
  exports: [ActivatorStoreDialogMissingSolutionsComponent, ActivatorStoreDialogGrantAccessComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class ActivatorStoreDialogModule {}
