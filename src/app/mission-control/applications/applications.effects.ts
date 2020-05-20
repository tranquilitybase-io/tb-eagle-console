import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationsService } from './applications.service';
import { createApplication } from './applications.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApplicationsEffects {
  constructor(private store: Store<any>, private actions$: Actions, private service: ApplicationsService) {}

  createApplication$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createApplication),
        tap(action => {
          this.service.createApplication(action.application);
        })
      ),
    { dispatch: false }
  );
}
