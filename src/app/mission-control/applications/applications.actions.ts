import { createAction, props } from '@ngrx/store';
import { Application, ApplicationDeployment } from './applications.model';

export const createApplication = createAction(
  '[Applications] createApplication',
  props<{ application: Application }>()
);

export const startDeployment = createAction('[Applications] startDeployment', props<{ id: number }>());

export const setApplicationDeploymentsData = createAction(
  '[Applications Deploy] setApplicationDeploymentsData',
  props<{ applicationDeploymentsData: ApplicationDeployment[] }>()
);
