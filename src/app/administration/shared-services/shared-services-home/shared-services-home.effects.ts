import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  getSharedServicesActions,
  getSharedServicesActionsError,
  getSharedServicesActionsSuccess,
} from './shared-services-home.actions';
import { SharedServicesHomeService } from './shared-services-home.service';

@Injectable()
export class SharedServicesHomeEffects {
  constructor(private actions$: Actions, private service: SharedServicesHomeService) {}

  getSharedServicesProgressItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSharedServicesActions),
      mergeMap(() =>
        this.service.getAll().pipe(
          map((sharedServicesActions) => getSharedServicesActionsSuccess({ sharedServicesActions })),
          catchError((error) => of(getSharedServicesActionsError({ error })))
        )
      )
    )
  );
}
