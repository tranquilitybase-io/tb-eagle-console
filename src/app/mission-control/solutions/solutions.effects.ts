import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { SolutionsService } from './solutions.service';
import {
  createSolution,
  createSolutionError,
  createSolutionSuccess,
  getSolutions,
  getSolutionsError,
  getSolutionsSuccess,
  startDeployment,
  startDeploymentError,
  startDeploymentSuccess,
  updateSolution,
  updateSolutionError,
  updateSolutionSuccess,
  toggleFavorites,
  toggleFavoritesError,
  toggleFavoritesSuccess,
  getSolutionsSilentLoading
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

  getSolutionsSilentLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSolutionsSilentLoading),
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

  startDeployment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startDeployment),
      mergeMap(action =>
        this.solutionService.deploySolution(action.id).pipe(
          map(() => {
            return startDeploymentSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Solution has not been deployed');
            return of(startDeploymentError(error));
          })
        )
      )
    )
  );

  toggleFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleFavorites),
      mergeMap(action =>
        this.solutionService.toggleFavorites(action.solutionId, action.isFavourite).pipe(
          map(solution => {
            solution.isFavourite
              ? this.snackBarService.success('Solution has been added to favorites')
              : this.snackBarService.success('Solution has been removed from favorites');
            return toggleFavoritesSuccess({ solution });
          }),
          catchError(error => {
            this.snackBarService.error('Solution can not be added / removed from favorites');
            return of(toggleFavoritesError({ error }));
          })
        )
      )
    )
  );
}
