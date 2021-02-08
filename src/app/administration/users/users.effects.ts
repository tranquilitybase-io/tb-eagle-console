import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from './users.service';
import { catchError, mergeMap, map } from 'rxjs/operators';
import {
  createUserData,
  createUserDataSuccess,
  createUserDataError,
  updateUserData,
  updateUserDataSuccess,
  updateUserDataError,
  getUsers,
  getUsersSuccess,
  getUsersError
} from './users.actions';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private snackBarService: ApiCallStatusSnackbarService
  ) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      mergeMap(action =>
        this.usersService.getUsers(action.queryParams).pipe(
          map(users => getUsersSuccess({ users })),
          catchError(error => of(getUsersError({ error })))
        )
      )
    )
  );

  createUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUserData),
      mergeMap(action =>
        this.usersService.add(action.userData).pipe(
          map(() => {
            this.snackBarService.success('User has been created');
            return createUserDataSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. User has not been created');
            return of(createUserDataError({ error }));
          })
        )
      )
    )
  );

  updateUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserData),
      mergeMap(action =>
        this.usersService.update(action.userData).pipe(
          map(() => {
            this.snackBarService.success('User has been updated');
            return updateUserDataSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. User has not been updated');
            return of(updateUserDataError({ error }));
          })
        )
      )
    )
  );
}
