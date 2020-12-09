import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivatorStoreService } from './activator-store.service';
import { first, mergeMap, switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import {
  createActivatorByURL,
  createActivatorByURLError,
  createActivatorByURLSuccess,
  denyAccess,
  denyAccessError,
  denyAccessSuccess,
  getActivatorCategories,
  getActivatorCategoriesError,
  getActivatorCategoriesSuccess,
  getActivators,
  getActivatorsError,
  getActivatorsSuccess,
  getMetaData,
  getMetaDataError,
  getMetaDataSuccess,
  grantAccess,
  grantAccessError,
  grantAccessSuccess,
  onboardActivator,
  onboardActivatorError,
  onboardActivatorSuccess,
  requestAccess,
  requestAccessError,
  requestAccessSuccess,
  setActivatorsCount,
  setCategoriesCount,
  setDeprecated,
  setDeprecatedError,
  setDeprecatedSuccess,
  setLocked,
  setLockedError,
  setLockedSuccess,
  updateActivator,
  updateActivatorError,
  updateActivatorSuccess
} from './activator-store.actions';
import { Store, select } from '@ngrx/store';
import { selectUser } from '@app/login/login.reducer';
import { of } from 'rxjs';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';
import { ActivatedRoute } from '@angular/router';
import { ActivatorsQueryParams } from './activator-store.model';

@Injectable()
export class ActivatorStoreEffects {
  constructor(
    private actions$: Actions,
    private route: ActivatedRoute,
    private service: ActivatorStoreService,
    private snackBarService: ApiCallStatusSnackbarService,
    private store: Store<any>
  ) {}

  getQueryParams() {
    const category = this.route.snapshot.queryParams.category;
    const status = this.route.snapshot.queryParams.status;
    const params = {
      ...(category && { category }),
      ...(status && { status })
    };
    console.log('params', params);
    return params;
  }

  getActivators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActivators),
      switchMap(action =>
        this.service.getActivators(action.queryParams).pipe(
          switchMap(activators => [
            setActivatorsCount({ activatorsCount: activators.length }),
            getActivatorsSuccess({ activators })
          ]),
          catchError(error => of(getActivatorsError({ error })))
        )
      )
    )
  );

  getActivatorCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActivatorCategories),
      switchMap(() =>
        this.service.getActivatorCategories().pipe(
          switchMap(categories => [
            setCategoriesCount({ categoriesCount: categories.length }),
            getActivatorCategoriesSuccess({ categories })
          ]),
          catchError(error => of(getActivatorCategoriesError({ error })))
        )
      )
    )
  );

  getMetaData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMetaData),
      switchMap(() =>
        this.service.getMetadata().pipe(
          switchMap(activators_meta => [
            setActivatorsCount({ activatorsCount: activators_meta.count }),
            getMetaDataSuccess({ activators_meta })
          ]),
          catchError(error => of(getMetaDataError({ error })))
        )
      )
    )
  );

  setDeprecated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setDeprecated),
      switchMap(action =>
        this.service.setDeprecated(action.id).pipe(
          switchMap(activatorData => {
            this.snackBarService.success('Activator has been deprecated');
            return [setDeprecatedSuccess({ activatorData }), getActivators({ queryParams: this.getQueryParams() })];
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Activator has not been deprecated');
            return of(setDeprecatedError({ error }));
          })
        )
      )
    )
  );

  setLocked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLocked),
      switchMap(action =>
        this.service.setLocked(action.id).pipe(
          switchMap(activatorData => {
            this.snackBarService.success('Activator has been locked');
            return [setLockedSuccess({ activatorData }), getActivators({ queryParams: this.getQueryParams() })];
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Activator has not been locked');
            return of(setLockedError({ error }));
          })
        )
      )
    )
  );

  denyAccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(denyAccess),
      switchMap(({ activatorId, teamId }) =>
        this.service.denyAccess(activatorId, teamId).pipe(
          switchMap(activatorData => {
            this.snackBarService.success('Access has been denied');
            return [denyAccessSuccess({ activatorData }), getActivators({ queryParams: this.getQueryParams() })];
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Access has not been denied');
            return of(denyAccessError({ error }));
          })
        )
      )
    )
  );

  grantAccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(grantAccess),
      switchMap(({ activatorId, teamId }) =>
        this.service.grantAccess(activatorId, teamId).pipe(
          switchMap(activatorData => {
            this.snackBarService.success('Access has been denied');
            return [grantAccessSuccess({ activatorData }), getActivators({ queryParams: this.getQueryParams() })];
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Access has not been denied');
            return of(grantAccessError({ error }));
          })
        )
      )
    )
  );

  requestAccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAccess),
      withLatestFrom(this.store.pipe(select(selectUser)).pipe(first())),
      switchMap(([action, user]) =>
        this.service.requestAccess(action.id, user).pipe(
          map(data => {
            this.snackBarService.success('Access has been requested');
            return requestAccessSuccess({ activatorData: data });
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Access has not been requested');
            return of(requestAccessError({ error }));
          })
        )
      )
    )
  );

  createActivatorByURL$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createActivatorByURL),
      switchMap(({ url }) =>
        this.service.createActivatorByURL(url).pipe(
          switchMap(activatorData => {
            this.snackBarService.success("Activator's draft has been created");
            return [
              createActivatorByURLSuccess({ activatorData }),
              getActivators({ queryParams: this.getQueryParams() })
            ];
          }),
          catchError(error => {
            this.snackBarService.error("Something went wrong. Activator's draft has not been created");
            return of(createActivatorByURLError({ error }));
          })
        )
      )
    )
  );

  updateActivator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateActivator),
      switchMap(({ activatorData }) =>
        this.service.updateActivator(activatorData).pipe(
          map(activatorData => {
            this.snackBarService.success('Activator has been updated');
            return updateActivatorSuccess({ activatorData });
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Activator has not been updated');
            return of(updateActivatorError({ error }));
          })
        )
      )
    )
  );

  onboardActivator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(onboardActivator),
      switchMap(({ activatorData }) =>
        this.service.onboardActivator(activatorData).pipe(
          map(data => {
            this.snackBarService.success('Activator has been onboarded');
            return onboardActivatorSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Activator has not been onboarded');
            return of(onboardActivatorError({ error }));
          })
        )
      )
    )
  );
}
