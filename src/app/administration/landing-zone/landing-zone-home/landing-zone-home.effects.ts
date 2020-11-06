import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  getLandingZoneActions,
  getLandingZoneActionsError,
  getLandingZoneActionsSuccess
} from './landing-zone-home.actions';
import { LandingZoneHomeService } from './landing-zone-home.service';

@Injectable()
export class LandingZoneHomeEffects {
  constructor(private actions$: Actions, private service: LandingZoneHomeService) {}

  getLandingZoneProgressItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLandingZoneActions),
      mergeMap(() =>
        this.service.getAll().pipe(
          map(landingZoneActions => getLandingZoneActionsSuccess({ landingZoneActions })),
          catchError(error => of(getLandingZoneActionsError({ error })))
        )
      )
    )
  );
}
