import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InfoPaneComponent } from './info-pane/info-pane.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormPaneComponent } from './login-form-pane/login-form-pane.component';
import { SharedModule } from '@app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent, InfoPaneComponent, LoginFormPaneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ]
})
export class LoginModule { }
