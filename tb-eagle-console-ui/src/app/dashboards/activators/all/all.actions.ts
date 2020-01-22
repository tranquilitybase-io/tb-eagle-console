import { createAction, props } from '@ngrx/store';

export const startDeployment = createAction('[All Activators] Start Deployment', props<{ name: string }>());
export const stopDeployment = createAction('[All Activators] Stop Deployment', props<{ name: string }>());
export const updateDeploymentProgress = createAction(
  '[All Activators] Update Deployment Progress',
  props<{ name: string; progress: number }>()
);
