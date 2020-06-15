import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '@app/login/user-login.service';
import * as loginActions from '../login.actions';
import { State, selectIsAuthenticated } from '../login.reducer';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-pane',
  templateUrl: './login-form-pane.component.html',
  styleUrls: ['./login-form-pane.component.scss']
})
export class LoginFormPaneComponent implements OnInit {
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

  ngOnInit() {}

  onSubmit($event: Event) {
    this.store.dispatch(loginActions.login({ username: this.userName, password: this.userPassword }));
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));

    $event.preventDefault();
  }
}
