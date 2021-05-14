import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BusinessUnitService } from './business-unit.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  createBusinessUnit,
  createBusinessUnitError,
  createBusinessUnitSuccess,
  getBusinessUnits,
  getBusinessUnitsError,
  getBusinessUnitsSuccess,
  updateBusinessUnit,
  updateBusinessUnitError,
  updateBusinessUnitSuccess,
} from './business-unit.actions';
import { of } from 'rxjs';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';

@Injectable()
export class BusinessUnitEffects {
  constructor(
    private actions$: Actions,
    private businessUnitService: BusinessUnitService,
    private snackBarService: ApiCallStatusSnackbarService
  ) {}

  getBusinessUnits = createEffect(() =>
    this.actions$.pipe(
      ofType(getBusinessUnits),
      mergeMap((actions) =>
        this.businessUnitService.getBusinessUnits(actions.queryParams).pipe(
          map((businessUnits) => getBusinessUnitsSuccess({ businessUnits })),
          catchError((error) => of(getBusinessUnitsError({ error })))
        )
      )
    )
  );

  createBusinessUnit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBusinessUnit),
      mergeMap((action) =>
        this.businessUnitService.add(action.businessUnit).pipe(
          map(() => {
            this.snackBarService.success('Business unit has been created');
            return createBusinessUnitSuccess();
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. Business unit has not been created');
            return of(createBusinessUnitError({ error }));
          })
        )
      )
    )
  );

  updateBusinessUnit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBusinessUnit),
      mergeMap((action) =>
        this.businessUnitService.update(action.businessUnit).pipe(
          map(() => {
            this.snackBarService.success('Business unit has been updated');
            return updateBusinessUnitSuccess();
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. Business unit has not been updated');
            return of(updateBusinessUnitError({ error }));
          })
        )
      )
    )
  );
}
