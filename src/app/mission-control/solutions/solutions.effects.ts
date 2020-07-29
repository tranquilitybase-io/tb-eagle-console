import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { SolutionsService } from './solutions.service';
import { createSolution, updateSolution, startDeployment } from './solutions.actions';

@Injectable()
export class SolutionEffects {
  constructor(private actions$: Actions, private solutionService: SolutionsService) {}

  createSolution$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createSolution),
        tap(({ solution }) => this.solutionService.createSolution(solution))
      ),
    { dispatch: false }
  );

  updateSolution$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateSolution),
        tap(({ solution }) => this.solutionService.updateSolution(solution))
      ),
    { dispatch: false }
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
