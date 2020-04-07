import { map, tap, switchMap, mergeMap } from 'rxjs/operators';

import { Injectable, NgZone } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LandingZoneWanService } from './landing-zone-wan.service';
import range from '@app/shared/utils/range';
import { WanConfiguration } from './landing-zone-wan.model';
import {
  createWanConfiguration,
  startDeployment,
  startDeployApplication,
  stopDeployment,
  updateDeploymentProgress,
  stopDeploymentApp,
  updateDeploymentProgressApp
} from './landing-zone-wan.actions';

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
export class LandingZoneWanEffects {
  constructor(private actions$: Actions, private langingZoneWanService: LandingZoneWanService, private zone: NgZone) {}

  createWanConfiguration$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createWanConfiguration),
        tap(action => this.langingZoneWanService.createWanConfiguration(action.wanConfiguration))
      ),
    { dispatch: false }
  );

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
