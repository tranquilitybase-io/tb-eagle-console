import { Injectable, NgZone } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationsService } from './applications.service';
import range from '@app/shared/utils/range';
import {
  createApplication,
  stopDeploymentApp,
  startDeployApplication,
  updateDeploymentProgressApp
} from './applications.actions';

function emitRangeDelayed<T>(values: T[], delay): Observable<T> {
  return new Observable(observer => {
    let i = 0;

    function tick() {
      console.log(i, values[i]);

      if (i < values.length) {
        observer.next(values[i]);

        if (i === values.length - 1) {
          observer.complete();

          return;
        }

        i++;
        setTimeout(tick, delay);
      }
    }

    tick();
  });
}

@Injectable()
export class ApplicationsEffects {
  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private service: ApplicationsService,
    private zone: NgZone
  ) {}

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

  deploymentsApp$ = createEffect(() =>
    this.zone.runOutsideAngular(() =>
      this.actions$.pipe(
        ofType(startDeployApplication),
        // This part of code mocks up deployment process
        mergeMap(({ name }) =>
          emitRangeDelayed(range(0, 100, 2), 300).pipe(
            tap(console.log),
            map(progressApp =>
              progressApp >= 100 ? stopDeploymentApp({ name }) : updateDeploymentProgressApp({ name, progressApp })
            )
          )
        )
      )
    )
  );
}
