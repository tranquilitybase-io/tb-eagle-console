import { exhaustMap, map, catchError, tap, filter, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { SolutionsService } from './solutions.service';
import { refreshSolutions, setSolutions, createSolution } from './solutions.actions';

@Injectable()
export class SolutionEffects {
  constructor(private actions$: Actions, private solutionService: SolutionsService) {}

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
