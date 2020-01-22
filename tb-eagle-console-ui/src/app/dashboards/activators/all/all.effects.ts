import { Injectable, NgZone } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
import range from '@app/shared/utils/range';

import { startDeployment, updateDeploymentProgress, stopDeployment } from './all.actions';

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
export class AllEffects {
  deployments$ = createEffect(() =>
    this.zone.runOutsideAngular(() =>
      this.actions$.pipe(
        ofType(startDeployment),
        // This part of code mocks up deployment process
        mergeMap(({ name }) =>
          emitRangeDelayed(range(0, 100, 2), 300).pipe(
            tap(console.log),
            map(progress => (progress >= 100 ? stopDeployment({ name }) : updateDeploymentProgress({ name, progress })))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private zone: NgZone) {}
}
