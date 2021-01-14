import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  getSharedServicesProgressItems,
  getSharedServicesProgressItemsError,
  getSharedServicesProgressItemsSuccess
} from './shared-services.actions';
import { SharedServicesService } from './shared-services.service';

@Injectable()
export class SharedServicesEnvironmentEffects {
  constructor(private actions$: Actions, private service: SharedServicesService) {}

  getSharedServicesProgressItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSharedServicesProgressItems),
      mergeMap(() =>
        this.service.getAll().pipe(
          map(sharedServicesProgressItems => getSharedServicesProgressItemsSuccess({ sharedServicesProgressItems })),
          catchError(error => of(getSharedServicesProgressItemsError({ error })))
        )
      )
    )
  );
}
