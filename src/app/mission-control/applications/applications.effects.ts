import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationsService } from './applications.service';
import { createApplication, startDeployment } from './applications.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApplicationsEffects {
  constructor(private actions$: Actions, private service: ApplicationsService) {}

  createApplication$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createApplication),
        tap(({ application }) => {
          this.service.createApplication(application);
        })
      ),
    { dispatch: false }
  );

  startDeployment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startDeployment),
        tap(({ id }) => this.service.deployApplication(id))
      ),
    { dispatch: false }
  );
}
