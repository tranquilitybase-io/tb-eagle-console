import { createAction, props } from '@ngrx/store';
import { Solution, SolutionDeployment } from './solutions.model';

export const setSelectedSolution = createAction('[Solutions] setSelectedSolution', props<{ solution: Solution }>());
export const discardSelectedSolution = createAction('[Solutions] discardSelectedSolution');

export const createSolution = createAction('[Solutions] createSolution', props<{ solution: Solution }>());
export const createSolutionSuccess = createAction('[Solutions] createSolutionSuccess');
export const createSolutionError = createAction('[Solutions] createSolutionError', props<{ error: any }>());

export const updateSolution = createAction('[Solutions] updateSolution', props<{ solution: Solution }>());
export const startDeployment = createAction('[Solutions] startDeployment', props<{ id: number }>());

export const setSolutionDeploymentsData = createAction(
  '[Solutions] setSolutionDeploymentsData',
  props<{ solutionDeploymentsData: SolutionDeployment[] }>()
);
