import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-pane',
  templateUrl: './login-form-pane.component.html',
  styleUrls: ['./login-form-pane.component.scss']
})
export class LoginFormPaneComponent {
  constructor(private router: Router) {}

  onSubmit($event: Event) {
    // TODO: login logic goes here
    this.router.navigateByUrl('/');
    $event.preventDefault();
  }
}
