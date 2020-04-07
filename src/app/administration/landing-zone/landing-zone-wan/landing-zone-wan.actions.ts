import { createAction, props } from '@ngrx/store';
import { WanConfiguration } from './landing-zone-wan.model';

export const createWanConfiguration = createAction(
  '[landing-zone-wan-create-configuration] Creates WAN configuration',
  props<{ wanConfiguration: WanConfiguration }>()
);

export const startDeployment = createAction('[landing-wan-creation] Start Deployment', props<{ name: string }>());
export const stopDeployment = createAction('[landing-wan-creation] Stop Deployment', props<{ name: string }>());
export const updateDeploymentProgress = createAction(
  '[landing-wan-creation] Update Deployment Progress',
  props<{ name: string; progress: number }>()
);

export const startDeployApplication = createAction(
  '[landing-wan-deploy-application] Start Deployment',
  props<{ name: string }>()
);

export const updateDeploymentProgressApp = createAction(
  '[landing-wan-deploy-application] Update Deployment Progress',
  props<{ name: string; progressApp: number }>()
);
export const stopDeploymentApp = createAction(
  '[landing-wan-deploy-application] Stop Deployment',
  props<{ name: string }>()
);
