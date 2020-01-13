import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { InfoPaneComponent } from './info-pane/info-pane.component';
import { LoginFormPaneComponent } from './login-form-pane/login-form-pane.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    InfoPaneComponent,
    LoginFormPaneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ]
})
export class LoginModule {}
