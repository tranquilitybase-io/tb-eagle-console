import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BusinessUnitService } from './business-unit.service';
import { tap } from 'rxjs/operators';
import { createBusinessUnit, updateBusinessUnit } from './business-unit.actions';

@Injectable()
export class BusinessUnitEffects {
  constructor(private actions$: Actions, private businessUnitService: BusinessUnitService) {}

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
