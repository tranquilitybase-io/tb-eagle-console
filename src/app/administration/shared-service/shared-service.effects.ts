import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  getSharedServicesItems,
  getSharedServicesItemsError,
  getSharedServicesItemsSuccess
} from './shared-service.actions';
import { SharedServiceService } from './shared-service.service';

@Injectable()
export class LandingZoneEnvironmentEffects {
  constructor(private actions$: Actions, private service: SharedServiceService) {}

  getLandingZoneProgressItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSharedServicesItems),
      mergeMap(() =>
        this.service.getAll().pipe(
          map(sharedServicesItems => getSharedServicesItemsSuccess({ sharedServicesItems })),
          catchError(error => of(getSharedServicesItemsError({ error })))
        )
      )
    )
  );
}
