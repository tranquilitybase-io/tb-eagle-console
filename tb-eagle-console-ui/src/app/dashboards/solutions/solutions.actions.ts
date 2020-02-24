import { createAction, props } from '@ngrx/store';
import { Solution, Application } from './interfaces';

export const setSolutions = createAction(
  'setSolutions [Solutions]',
  props<{ solutions: Solution[]; filter: string }>()
);
export const setSelectedSolution = createAction('setSelectedSolution [Solutions]', props<{ solution: Solution }>());
export const discardSelectedSolution = createAction('discardSelectedSolution [Solutions]');
export const refreshSolutions = createAction('refreshSolutions [Solutions]', props<{ filter: string }>());

export const createSolution = createAction('[solutions-creation] create-solution', props<{ solution: Solution }>());
export const appendApplication = createAction(
  '[solutions-append-application] Appends application to solution',
  props<{ solutionId: number; application: Application }>()
);

export const startDeployment = createAction('[solutions-creation] Start Deployment', props<{ name: string }>());
export const stopDeployment = createAction('[solutions-creation] Stop Deployment', props<{ name: string }>());
export const updateDeploymentProgress = createAction(
  '[solutions-creation] Update Deployment Progress',
  props<{ name: string; progress: number }>()
);
export const dismissAlmostReadyAlert = createAction('[solutions-creation] Stop showing off almost ready alert');
export const dismissDeploymentReadyAlert = createAction('[solutions-creation] Stop showing off deployment ready alert');

export const startDeployApplication = createAction(
  '[solutions-deploy-application] Start Deployment',
  props<{ name: string }>()
);
export const updateDeploymentProgressApp = createAction(
  '[solutions-deploy-application] Update Deployment Progress',
  props<{ name: string; progressApp: number }>()
);
export const stopDeploymentApp = createAction(
  '[solutions-deploy-application] Stop Deployment',
  props<{ name: string }>()
);
