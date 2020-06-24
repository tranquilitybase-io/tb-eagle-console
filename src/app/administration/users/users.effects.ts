import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from './users.service';
import { tap } from 'rxjs/operators';
import { storeUserData } from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  storeUserData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(storeUserData),
        tap(action => this.usersService.postUserData(action.userData))
      ),
    { dispatch: false }
  );
}
