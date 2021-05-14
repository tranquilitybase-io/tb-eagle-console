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
      mergeMap((action) =>
        this.service.createApplication(action.application).pipe(
          map(() => {
            this.snackBarService.success('Activator has been provisioned');
            return createApplicationSuccess();
          }),
          catchError((error) => {
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
      mergeMap((action) =>
        this.service.deployApplication(action.id).pipe(
          map(() => {
            return startDeploymentSuccess();
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. Application has not been deployed');
            return of(startDeploymentError(error));
          })
        )
      )
    )
  );
}
