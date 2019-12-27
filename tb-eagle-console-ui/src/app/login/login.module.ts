import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InfoPaneComponent } from './info-pane/info-pane.component';



@NgModule({
  declarations: [LoginComponent, InfoPaneComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
