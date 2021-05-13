import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserLoginService } from '@app/login/user-login.service';
import * as loginActions from '../login.actions';
import { State, selectIsAuthenticated } from '../login.reducer';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-pane',
  templateUrl: './login-form-pane.component.html',
  styleUrls: ['./login-form-pane.component.scss'],
})
export class LoginFormPaneComponent implements OnInit, AfterViewInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  pwdFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  userName: string;
  userPassword: string;

  failMessage: string;
  loginMessage: string = 'Invalid username/password. Please try again or create an account.';

  response: any;

  responseJson: string;
  isAuthenticated$: Observable<boolean>;

  error: boolean = false;

  loadingError$: any;

  constructor(private uls: UserLoginService, private store: Store<State>) {}

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }

  onSubmit() {
    this.store.dispatch(loginActions.login({ username: this.userName, password: this.userPassword }));
  }

  onGoogleSuccess(googleUser) {
    localStorage.setItem('id_token', googleUser.getAuthResponse().id_token);
    document.getElementById('google-login-success').click();
  }

  googleLoginInit() {
    globalThis.gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onGoogleSuccess,
      // 'onfailure': onFailure
    });
  }

  ngAfterViewInit() {
    this.googleLoginInit();
  }
}
