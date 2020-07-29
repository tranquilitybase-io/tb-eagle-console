import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as LoginActions from './login.actions';

import { UserLoginService } from './user-login.service';
import { of } from 'rxjs';
import { updateShowWelcome } from './login.actions';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private LoginService: UserLoginService) {}

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap(({ username, password }) =>
        this.LoginService.login(username, password).pipe(
          map(user => LoginActions.loginSuccess({ user })),
          catchError(error => of(LoginActions.loginFailure()))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginSuccess),
        tap(({ user }) => this.LoginService.loginSuccess(user))
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginFailure),
        tap(() => this.LoginService.loginFailure())
      ),
    { dispatch: false }
  );

  updateShowWelcome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateShowWelcome),
        tap(action => this.LoginService.updateShowWelcome(action.userId, action.showWelcome))
      ),
    { dispatch: false }
  );
}
