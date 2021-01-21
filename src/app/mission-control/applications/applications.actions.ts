import { createAction, props } from '@ngrx/store';
import { Application, ApplicationDeployment, ApplicationSettings } from './applications.model';

export const createApplication = createAction(
  '[Applications] createApplication',
  props<{ application: Application }>()
);
export const createApplicationSuccess = createAction('[Applications] createApplicationSuccess');
export const createApplicationError = createAction('[Applications] createApplicationError', props<{ error: any }>());
export const createApplicationStatusReset = createAction('[Applications] createApplicationStatusReset');

export const startDeployment = createAction('[Applications] startDeployment', props<{ id: number }>());
export const startDeploymentSuccess = createAction('[Applications] startDeploymentSuccess');
export const startDeploymentError = createAction('[Applications] startDeploymentError', props<{ error: any }>());

export const setApplicationDeploymentsData = createAction(
  '[Applications Deploy] setApplicationDeploymentsData',
  props<{ applicationDeploymentsData: ApplicationDeployment[] }>()
);

export const getApplicationSettings = createAction('[Applications] getApplicationSettings');
export const getApplicationSettingsError = createAction(
  '[Applications] getApplicationSettingsError',
  props<{ error: any }>()
);
export const getApplicationSettingsSuccess = createAction('[Applications] getApplicationSettings');

export const deleteApplicationSettings = createAction('[Applications] deleteApplicationSettings');
export const deleteApplicationSettingsError = createAction(
  '[Applications] deleteApplicationSettingsError',
  props<{ error: any }>()
);
export const deleteApplicationSettingsSuccess = createAction('[Applications] deleteApplicationSettingsSuccess');

export const updateApplicationSettings = createAction('[Applications] updateApplicationSettings');
export const updateApplicationSettingsError = createAction(
  '[Applications] updateApplicationSettingsError',
  props<{ error: any }>()
);
export const updateApplicationSettingsSuccess = createAction('[Applications] updateApplicationSettingsSuccess');

export const createApplicationSettings = createAction('[Applications] createApplicationSettings');
export const createApplicationSettingsError = createAction(
  '[Applications] createApplicationSettingsError',
  props<{ error: any }>()
);
export const createApplicationSettingsSuccess = createAction('[Applications] createApplicationSettingsSuccess');
