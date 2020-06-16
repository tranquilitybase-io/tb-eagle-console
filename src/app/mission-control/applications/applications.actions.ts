import { createAction, props } from '@ngrx/store';
import { Application } from './applications.model';

export const createApplication = createAction(
  '[Applications] create-application',
  props<{ application: Application }>()
);

export const startDeployApplication = createAction(
  '[Applications Deploy] Start Deployment',
  props<{ id: number; name: string }>()
);
export const updateDeploymentProgressApp = createAction(
  '[Applications Deploy] Update Deployment Progress',
  props<{ name: string; progressApp: number }>()
);
export const stopDeploymentApp = createAction('[Applications Deploy] Stop Deployment', props<{ name: string }>());
export const dismissDeploymentAppReadyAlert = createAction(
  '[Applications Deploy] Stop showing off deployment ready alert'
);
