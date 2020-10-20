import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from './users.service';
import { tap, catchError, mergeMap, map } from 'rxjs/operators';
import { createUserData, updateUserData, getUsers, getUsersSuccess, getUsersError } from './users.actions';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map(users => {
            console.log('effect succes', users);
            return getUsersSuccess({ users });
          }),
          catchError(error => of(getUsersError({ error })))
        )
      )
    )
  );

  createUserData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createUserData),
        tap(action => this.usersService.createUserData(action.userData))
      ),
    { dispatch: false }
  );

  updateUserData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateUserData),
        tap(action => this.usersService.updateUserData(action.userData))
      ),
    { dispatch: false }
  );
}
