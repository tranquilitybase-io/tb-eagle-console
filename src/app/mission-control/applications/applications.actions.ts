import { createAction, props } from '@ngrx/store';
import { Application, ApplicationDeployment } from './applications.model';

export const createApplication = createAction(
  '[Applications] createApplication',
  props<{ application: Application }>()
);
export const createApplicationSuccess = createAction('[Applications] createApplicationSuccess');
export const createApplicationError = createAction('[Applications] createApplicationError', props<{ error: any }>());

export const startDeployment = createAction('[Applications] startDeployment', props<{ id: number }>());
export const startDeploymentSuccess = createAction('[Applications] startDeploymentSuccess');
export const startDeploymentError = createAction('[Applications] startDeploymentError', props<{ error: any }>());

export const setApplicationDeploymentsData = createAction(
  '[Applications Deploy] setApplicationDeploymentsData',
  props<{ applicationDeploymentsData: ApplicationDeployment[] }>()
);
