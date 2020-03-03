import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivatorsService } from './activators.service';
import { tap } from 'rxjs/operators';
import { setDeprecated, setLocked } from './activators.actions';

@Injectable()
export class ActivatorsEffects {
  constructor(private actions$: Actions, private service: ActivatorsService) {}

  setDeprecated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setDeprecated),
        tap(({ id }) => this.service.setDeprecated(id))
      ),
    { dispatch: false }
  );

  setLocked$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setLocked),
        tap(({ id }) => this.service.setLocked(id))
      ),
    { dispatch: false }
  );
}
