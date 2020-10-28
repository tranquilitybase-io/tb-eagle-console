import { createAction, props } from '@ngrx/store';
import { Solution, SolutionDeployment } from './solutions.model';

const key = '[Solutions]';

export const setSelectedSolution = createAction(`${key} setSelectedSolution`, props<{ solution: Solution }>());
export const discardSelectedSolution = createAction(`${key}  discardSelectedSolution`);

export const getSolutions = createAction(`${key} getSolutions`);
export const getSolutionsSuccess = createAction(`${key} getSolutionsSuccess`, props<{ solutions: Solution[] }>());
export const getSolutionsError = createAction(`${key} getSolutionsError`, props<{ error: any }>());

export const createSolution = createAction(`${key}  createSolution`, props<{ solution: Solution }>());
export const createSolutionSuccess = createAction(`${key}  createSolutionSuccess`);
export const createSolutionError = createAction(`${key}  createSolutionError`, props<{ error: any }>());
export const resetCreateSolutionStatus = createAction(`${key}  resetCreateSolution`);

export const updateSolution = createAction(`${key}  updateSolution`, props<{ solution: Solution }>());
export const updateSolutionSuccess = createAction(`${key}  updateSolutionSuccess`);
export const updateSolutionError = createAction(`${key}  updateSolutionsError`, props<{ error: any }>());
export const resetUpdateSolutionStatus = createAction(`${key}  resetUpdateSolution`);

export const startDeployment = createAction(`${key}  startDeployment`, props<{ id: number }>());
export const startDeploymentSuccess = createAction(`${key}  startDeploymentSuccess`);
export const startDeploymentError = createAction(`${key}  startDeploymentError`, props<{ error: any }>());

export const setSolutionDeploymentsData = createAction(
  `${key}  setSolutionDeploymentsData`,
  props<{ solutionDeploymentsData: SolutionDeployment[] }>()
);
