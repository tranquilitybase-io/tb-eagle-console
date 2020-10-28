import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, tap, catchError, map } from 'rxjs/operators';
import { SolutionsService } from './solutions.service';
import {
  createSolution,
  updateSolution,
  startDeployment,
  getSolutions,
  getSolutionsSuccess,
  getSolutionsError,
  createSolutionSuccess,
  createSolutionError,
  updateSolutionSuccess,
  updateSolutionError
} from './solutions.actions';
import { of } from 'rxjs';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';

@Injectable()
export class SolutionEffects {
  constructor(
    private actions$: Actions,
    private solutionService: SolutionsService,
    private snackBarService: ApiCallStatusSnackbarService
  ) {}

  getSolutions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSolutions),
      mergeMap(() =>
        this.solutionService.getAll().pipe(
          map(solutions => getSolutionsSuccess({ solutions })),
          catchError(error => of(getSolutionsError({ error })))
        )
      )
    )
  );

  createSolution$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSolution),
      mergeMap(action =>
        this.solutionService.add(action.solution).pipe(
          map(() => {
            this.snackBarService.success('Solution has been created');
            return createSolutionSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Solution has not been created');
            return of(createSolutionError({ error }));
          })
        )
      )
    )
  );

  updateSolution$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSolution),
      mergeMap(action =>
        this.solutionService.update(action.solution).pipe(
          map(() => {
            this.snackBarService.success('Solution has been updated');
            return updateSolutionSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Solution has not been updated');
            return of(updateSolutionError({ error }));
          })
        )
      )
    )
  );

  startDeployment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startDeployment),
        tap(({ id }) => this.solutionService.deploySolution(id))
      ),
    { dispatch: false }
  );
}
