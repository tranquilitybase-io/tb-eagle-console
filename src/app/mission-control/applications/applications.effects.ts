import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationsService } from './applications.service';
import {
  createApplication,
  createApplicationError,
  createApplicationSuccess,
  startDeployment,
  startDeploymentError,
  startDeploymentSuccess,
  getApplicationSettings,
  getApplicationSettingsError,
  getApplicationSettingsSuccess,
  createApplicationSettings,
  createApplicationSettingsError,
  createApplicationSettingsSuccess,
  updateApplicationSettings,
  updateApplicationSettingsError,
  updateApplicationSettingsSuccess,
  deleteApplicationSettings,
  deleteApplicationSettingsSuccess,
  deleteApplicationSettingsError
} from './applications.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';

@Injectable()
export class ApplicationsEffects {
  constructor(
    private actions$: Actions,
    private service: ApplicationsService,
    private snackBarService: ApiCallStatusSnackbarService
  ) {}

  createApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createApplication),
      mergeMap(action =>
        this.service.createApplication(action.application).pipe(
          map(() => {
            this.snackBarService.success('Activator has been provisioned');
            return createApplicationSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Application has not been created');
            return of(createApplicationError({ error }));
          })
        )
      )
    )
  );

  startDeployment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startDeployment),
      mergeMap(action =>
        this.service.deployApplication(action.id).pipe(
          map(() => {
            return startDeploymentSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Application has not been deployed');
            return of(startDeploymentError(error));
          })
        )
      )
    )
  );

  getApplicationSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getApplicationSettings),
      mergeMap(action =>
        this.service.getApplicationSettings().pipe(
          map(() => getApplicationSettingsSuccess()),
          catchError(error => of(getApplicationSettingsError({ error })))
        )
      )
    )
  );

  createApplicationSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createApplicationSettings),
      mergeMap(action =>
        this.service.createApplicationSettings().pipe(
          map(() => {
            this.snackBarService.success('Activator settings has been created');
            return createApplicationSettingsSuccess();
          }),
          catchError(error => {
            this.snackBarService.success('Activator settings has not been created');
            return of(createApplicationSettingsError({ error }));
          })
        )
      )
    )
  );

  updateApplicationSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateApplicationSettings),
      mergeMap(action =>
        this.service.getApplicationSettings().pipe(
          map(() => {
            this.snackBarService.success('Activator settings has been updated');
            return updateApplicationSettingsSuccess();
          }),
          catchError(error => {
            this.snackBarService.success('Activator settings has not been updated');
            return of(updateApplicationSettingsError({ error }));
          })
        )
      )
    )
  );

  deleteApplicationSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteApplicationSettings),
      mergeMap(action =>
        this.service.deleteApplicationSettings().pipe(
          map(() => {
            this.snackBarService.success('Activator settings has been updated');
            return deleteApplicationSettingsSuccess();
          }),
          catchError(error => {
            this.snackBarService.success('Activator settings has not been updated');
            return of(deleteApplicationSettingsError({ error }));
          })
        )
      )
    )
  );
}
