import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from './users.service';
import { tap } from 'rxjs/operators';
import { storeUserData, updateUserData } from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  storeUserData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(storeUserData),
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
