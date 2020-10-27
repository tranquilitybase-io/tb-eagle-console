import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BusinessUnitService } from './business-unit.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import {
  createBusinessUnit,
  updateBusinessUnit,
  getBusinessUnits,
  getBusinessUnitsSuccess,
  getBusinessUnitsError
} from './business-unit.actions';
import { of } from 'rxjs';

@Injectable()
export class BusinessUnitEffects {
  constructor(private actions$: Actions, private businessUnitService: BusinessUnitService) {}

  getBusinessUnits = createEffect(() =>
    this.actions$.pipe(
      ofType(getBusinessUnits),
      mergeMap(() =>
        this.businessUnitService.getAll().pipe(
          map(businessUnits => getBusinessUnitsSuccess({ businessUnits })),
          catchError(error => of(getBusinessUnitsError({ error })))
        )
      )
    )
  );

  createBusinessUnit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createBusinessUnit),
        tap(action => this.businessUnitService.createBusinessUnit(action.businessUnit))
      ),
    { dispatch: false }
  );

  updateBusinessUnit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateBusinessUnit),
        tap(action => this.businessUnitService.updateBusinessUnit(action.businessUnit))
      ),
    { dispatch: false }
  );
}
