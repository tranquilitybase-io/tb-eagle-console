import { State } from './../login.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '@app/login/user-login.service';
import { User } from '../user.interface';

import { select, Store } from '@ngrx/store';
import * as loginActions from '../login.actions';

@Component({
  selector: 'app-login-form-pane',
  templateUrl: './login-form-pane.component.html',
  styleUrls: ['./login-form-pane.component.scss']
})
export class LoginFormPaneComponent implements OnInit {
  userName: string;
  userPassword: string;

  failMessage: string;
  loginMessage: string = 'Ivalid username/password. Please try again or create an account.';

  obs: Observable<User>;

  response: any;
  error: any;

  responseJson: string;
  loggedIn$: Observable<boolean>;

  loggedIn: any;

  constructor(private router: Router, private uls: UserLoginService, private store: Store<State>) {}

  //loggedIn: boolean = this.uls.isUserLoggedIn();

  ngOnInit() {
    this.loggedIn$ = this.store.select(state => state.loggedIn);
  }

  onSubmit($event: Event) {
    this.store.dispatch(loginActions.login());
    console.log('Login Action Dispatched');

    //{username: this.userName, password: this.userPassword}

    /*
    this.obs = this.uls.login(this.userName, this.userPassword);
    this.obs.subscribe(
      response => {

        //this.responseJson = JSON.stringify(response);

        this.uls.setUserLoggedIn(true);
        //this.router.navigateByUrl('/dashboard/solutions');
        this.response = response;
        console.log(this.response);

      },

      error => {
        this.uls.setUserLoggedIn(false);
        this.error = error;

      }
    );
    */
    $event.preventDefault();
  }
}
