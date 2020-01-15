import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '@app/user-login.service';

@Component({
  selector: 'app-login-form-pane',
  templateUrl: './login-form-pane.component.html',
  styleUrls: ['./login-form-pane.component.scss']
})
export class LoginFormPaneComponent {
  userName: String;
  userPassword: String;
  loginMessage: String;

  response: any;
  error: any;

  constructor(private router: Router, private http: HttpClient, private uls: UserLoginService) {}

  loggedIn: boolean = this.uls.isUserLoggedIn();

  onSubmit($event: Event) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = {
      username: this.userName,
      password: this.userPassword
    };

    this.http.post('http://localhost:3000/api/login', params, { headers }).subscribe(
      response => {
        this.uls.setUserLoggedIn(true);
        this.response = response;
        this.router.navigateByUrl('/dashboard/solutions');
      },
      error => {
        this.uls.setUserLoggedIn(false);
        this.error = error;
        this.loginMessage = 'Login failed, try again or register for an account.';
      }
    );

    $event.preventDefault();
  }
}
