import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SettingsService } from './settings.service';
import { catchError, mergeMap, map } from 'rxjs/operators';
import {
  createSettings,
  createSettingsError,
  createSettingsSuccess,
  deleteSettings,
  deleteSettingsError,
  deleteSettingsSuccess,
  getSettings,
  getSettingsError,
  getSettingsSuccess,
  updateSettings,
  updateSettingsError,
  updateSettingsSuccess,
} from './settings.actions';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private service: SettingsService,
    private snackBarService: ApiCallStatusSnackbarService
  ) {}

  getSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSettings),
      mergeMap(() =>
        this.service.getSettings().pipe(
          map((settings) => getSettingsSuccess({ settings })),
          catchError((error) => of(getSettingsError({ error })))
        )
      )
    )
  );

  createSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSettings),
      mergeMap((action) =>
        this.service.createSettings(action.settings).pipe(
          map((settings) => {
            this.snackBarService.success('Settings has been created');
            return createSettingsSuccess({ settings });
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. Settings has not been created');
            return of(createSettingsError({ error }));
          })
        )
      )
    )
  );

  updateSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSettings),
      mergeMap((action) =>
        this.service.updateSettings(action.settings).pipe(
          map((settings) => {
            this.snackBarService.success('Settings has been updated');
            return updateSettingsSuccess({ settings });
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. User has not been updated');
            return of(updateSettingsError({ error }));
          })
        )
      )
    )
  );

  deleteSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSettings),
      mergeMap(() =>
        this.service.deleteSettings().pipe(
          map(() => {
            this.snackBarService.success('Settings has been deleted');
            return deleteSettingsSuccess();
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. Settings has not been deleted');
            return of(deleteSettingsError({ error }));
          })
        )
      )
    )
  );
}
