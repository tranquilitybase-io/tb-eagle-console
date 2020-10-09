import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BusinessUnitService } from './business-unit.service';
import { tap } from 'rxjs/operators';
import { getBusinessUnitList } from './business-unit.actions';

@Injectable()
export class BusinessUnitEffects {
  constructor(private actions$: Actions, private businessUnitService: BusinessUnitService) {}

  getBusinessUnitList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getBusinessUnitList),
        tap(action => this.businessUnitService.getBusinessUnitList())
      ),
    { dispatch: false }
  );
}
