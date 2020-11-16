import { map, tap, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { Injectable, NgZone } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { LandingZoneWanService } from './landing-zone-wan.service';
import range from '@app/shared/utils/range';
import {
  createWanConfiguration,
  createWanConfigurationError,
  createWanConfigurationSuccess,
  getLandingZoneWans,
  getLandingZoneWansError,
  getLandingZoneWansSuccess,
  startConnectionDeployment,
  stopConnectionDeployment,
  updateConnectionDeploymentProgress,
  updateWanConfiguration,
  updateWanConfigurationError,
  updateWanConfigurationSuccess
} from './landing-zone-wan.actions';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';

function emitRangeDelayed<T>(values: T[], delay): Observable<T> {
  return new Observable(observer => {
    let i = 0;

    function tick() {
      console.log(i, values[i]);

      if (i < values.length) {
        observer.next(values[i]);

        if (i === values.length - 1) {
          observer.complete();

          return;
        }

        i++;
        setTimeout(tick, delay);
      }
    }

    tick();
  });
}

@Injectable()
export class LandingZoneWanEffects {
  constructor(
    private actions$: Actions,
    private langingZoneWanService: LandingZoneWanService,
    private snackBarService: ApiCallStatusSnackbarService,
    private zone: NgZone
  ) {}

  getLandingZoneWans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLandingZoneWans),
      mergeMap(() =>
        this.langingZoneWanService.getAll().pipe(
          map(wanConfigurations => getLandingZoneWansSuccess({ wanConfigurations })),
          catchError(error => of(getLandingZoneWansError({ error })))
        )
      )
    )
  );

  createWanConfiguration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createWanConfiguration),
      mergeMap(action =>
        this.langingZoneWanService.add(action.wanConfiguration).pipe(
          switchMap(() => {
            this.snackBarService.success('New connection has been created');
            return [createWanConfigurationSuccess(), getLandingZoneWans()];
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. New connection has not been created');
            return of(createWanConfigurationError({ error }));
          })
        )
      )
    )
  );

  updateWanConfiguration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateWanConfiguration),
      mergeMap(action =>
        this.langingZoneWanService.update(action.wanConfiguration).pipe(
          switchMap(() => {
            this.snackBarService.success('Connection has been updated');
            return [updateWanConfigurationSuccess(), getLandingZoneWans()];
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Connection has not been updated');
            return of(updateWanConfigurationError({ error }));
          })
        )
      )
    )
  );

  startConnectionDeployment$ = createEffect(() =>
    this.zone.runOutsideAngular(() =>
      this.actions$.pipe(
        ofType(startConnectionDeployment),
        // This part of code mocks up deployment process
        mergeMap(({ name }) =>
          emitRangeDelayed(range(0, 100, 2), 300).pipe(
            tap(console.log),
            map(progress =>
              progress >= 100
                ? stopConnectionDeployment({ name })
                : updateConnectionDeploymentProgress({ name, progress })
            )
          )
        )
      )
    )
  );
}
