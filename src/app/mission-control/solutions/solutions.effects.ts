import { Injectable, NgZone } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SolutionsService } from './solutions.service';
import range from '@app/shared/utils/range';
import {
  refreshSolutions,
  setSolutions,
  createSolution,
  updateSolution,
  startDeployment,
  updateDeploymentProgress,
  stopDeployment
} from './solutions.actions';

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
export class SolutionEffects {
  constructor(private actions$: Actions, private solutionService: SolutionsService, private zone: NgZone) {}

  refreshEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(refreshSolutions),
      switchMap(action =>
        this.solutionService.getAll().pipe(map(solutions => setSolutions({ solutions, filter: action.filter })))
      )
    )
  );

  createSolution$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createSolution),
        tap(action => this.solutionService.createSolution(action.solution))
      ),
    { dispatch: false }
  );

  updateSolution$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateSolution),
        tap(action => this.solutionService.updateSolution(action.solution))
      ),
    { dispatch: false }
  );

  startDeployment$ = createEffect(() =>
    this.zone.runOutsideAngular(() =>
      this.actions$.pipe(
        ofType(startDeployment),
        tap(action => this.solutionService.deploySolution(Number(action.name))),
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

  //   refreshEffects$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(refreshSolutions),
  //       exhaustMap(action =>
  //         this.solutionService.getAll().pipe(
  //             map(solutions => setFavourites({solutions}))
  //           )
  //       )
  //     )
  //   );
}
