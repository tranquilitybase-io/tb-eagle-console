import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { SettingsHomeComponent } from './settings-home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsDialogModule } from '../setting-dialog/settings-dialog.module';
import { MatExpansionModule } from '@angular/material/expansion';

const routes: Routes = [
  {
    path: '',
    component: SettingsHomeComponent
  }
];

@NgModule({
  declarations: [SettingsHomeComponent],
  imports: [
    SettingsDialogModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule
  ]
})
export class SettingsHomeModule {}
