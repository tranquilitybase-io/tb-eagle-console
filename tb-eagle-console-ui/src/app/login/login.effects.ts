import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as LoginActions from './login.actions';

import { UserLoginService } from './user-login.service';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private LoginService: UserLoginService) {}

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap(action =>
        this.LoginService.login(action.username, action.password).pipe(
          map(user => LoginActions.loginSuccess()),
          catchError(error => of(LoginActions.loginFailure()))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginSuccess),
        tap(() => localStorage.setItem('isLoggedIn', 'true'))
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginFailure),
        tap(() => localStorage.setItem('isLoggedIn', 'false'))
      ),
    { dispatch: false }
  );
}
