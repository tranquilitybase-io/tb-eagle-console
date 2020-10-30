import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivatorStoreService } from './activator-store.service';
import { tap, first, mergeMap, switchMap, map, catchError } from 'rxjs/operators';
import {
  getByCategory,
  getByCategorySuccess,
  getByCategoryError,
  setDeprecated,
  setLocked,
  denyAccess,
  grantAccess,
  requestAccess,
  createActivatorByURL,
  updateActivator,
  setActivatorsCount,
  getActivatorCategories,
  setCategoriesCount,
  getActivatorCategoriesSuccess,
  getActivatorCategoriesError,
  getMetaData,
  getMetaDataSuccess,
  getMetaDataError
} from './activator-store.actions';
import { Store, select } from '@ngrx/store';
import { selectUser } from '@app/login/login.reducer';
import { User } from '@app/login/login.model';
import { of } from 'rxjs';

@Injectable()
export class ActivatorStoreEffects {
  constructor(private store: Store<any>, private actions$: Actions, private service: ActivatorStoreService) {}

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

  denyAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(denyAccess),
        tap(({ activatorId, teamId }) => this.service.denyAccess(activatorId, teamId))
      ),
    { dispatch: false }
  );

  grantAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(grantAccess),
        tap(({ activatorId, teamId }) => this.service.grantAccess(activatorId, teamId))
      ),
    { dispatch: false }
  );

  requestAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(requestAccess),
        tap(({ id }) => {
          this.store
            .pipe(select(selectUser))
            .pipe(first())
            .subscribe((user: User) => this.service.requestAccess(id, user));
        })
      ),
    { dispatch: false }
  );

  createActivatorByURL$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createActivatorByURL),
        tap(({ url }) => this.service.createActivatorByURL(url))
      ),
    { dispatch: false }
  );

  updateActivator$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateActivator),
        tap(({ activatorData }) => this.service.updateActivator(activatorData))
      ),
    { dispatch: false }
  );
}
