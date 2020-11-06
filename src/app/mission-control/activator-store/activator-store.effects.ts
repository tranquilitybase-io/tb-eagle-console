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
  getByCategory,
  getByCategoryError,
  getByCategorySuccess,
  getMetaData,
  getMetaDataError,
  getMetaDataSuccess,
  grantAccess,
  grantAccessError,
  grantAccessSuccess,
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

@Injectable()
export class ActivatorStoreEffects {
  constructor(
    private actions$: Actions,
    private route: ActivatedRoute,
    private service: ActivatorStoreService,
    private snackBarService: ApiCallStatusSnackbarService,
    private store: Store<any>
  ) {}

  getByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getByCategory),
      mergeMap(action =>
        this.service.getByCategory(action.category).pipe(
          switchMap(activators => [
            setActivatorsCount({ activatorsCount: activators.length }),
            getByCategorySuccess({ activators })
          ]),
          catchError(error => of(getByCategoryError({ error })))
        )
      )
    )
  );

  getActivatorCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActivatorCategories),
      mergeMap(() =>
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
      mergeMap(() =>
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
      mergeMap(action =>
        this.service.setDeprecated(action.id).pipe(
          switchMap(activatorData => {
            this.snackBarService.success('Activator has been deprecated');
            const category = this.route.snapshot.queryParams.categorySwitch;
            return [setDeprecatedSuccess({ activatorData }), getByCategory({ category })];
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
      mergeMap(action =>
        this.service.setLocked(action.id).pipe(
          switchMap(activatorData => {
            this.snackBarService.success('Activator has been locked');
            const category = this.route.snapshot.queryParams.categorySwitch;
            return [setLockedSuccess({ activatorData }), getByCategory({ category })];
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
      mergeMap(({ activatorId, teamId }) =>
        this.service.denyAccess(activatorId, teamId).pipe(
          switchMap(activatorData => {
            this.snackBarService.success('Access has been denied');
            const category = this.route.snapshot.queryParams.categorySwitch;
            return [denyAccessSuccess({ activatorData }), getByCategory({ category })];
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
      mergeMap(({ activatorId, teamId }) =>
        this.service.grantAccess(activatorId, teamId).pipe(
          switchMap(activatorData => {
            this.snackBarService.success('Access has been denied');
            const category = this.route.snapshot.queryParams.categorySwitch;
            return [grantAccessSuccess({ activatorData }), getByCategory({ category })];
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
      mergeMap(([action, user]) =>
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
      mergeMap(({ url }) =>
        this.service.createActivatorByURL(url).pipe(
          switchMap(activatorData => {
            this.snackBarService.success("Activator's draft has been created");
            const category = this.route.snapshot.queryParams.categorySwitch;
            return [createActivatorByURLSuccess({ activatorData }), getByCategory({ category })];
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
      mergeMap(({ activatorData }) =>
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
}
