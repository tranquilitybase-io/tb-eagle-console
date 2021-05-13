import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  getLandingZoneProgressItems,
  getLandingZoneProgressItemsError,
  getLandingZoneProgressItemsSuccess,
} from './landing-zone.actions';
import { LandingZoneService } from './landing-zone.service';

@Injectable()
export class LandingZoneEnvironmentEffects {
  constructor(private actions$: Actions, private service: LandingZoneService) {}

  getLandingZoneProgressItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLandingZoneProgressItems),
      mergeMap(() =>
        this.service.getAll().pipe(
          map((landingZoneProgressItems) => getLandingZoneProgressItemsSuccess({ landingZoneProgressItems })),
          catchError((error) => of(getLandingZoneProgressItemsError({ error })))
        )
      )
    )
  );
}
