import { createAction, props } from '@ngrx/store';
import { WanConfiguration } from './landing-zone-wan.model';

export const createWanConfiguration = createAction(
  '[landing-zone-wan-create-configuration] Creates WAN configuration',
  props<{ wanConfiguration: WanConfiguration }>()
);
export const createWanConfigurationSuccess = createAction(
  '[landing-zone-wan-create-configuration] createWanConfigurationSuccess'
);
export const createWanConfigurationError = createAction(
  '[landing-zone-wan-create-configuration] createWanConfigurationError',
  props<{ error: any }>()
);
export const resetCreateWanConfigurationStatus = createAction(
  '[landing-zone-wan-create-configuration] resetCreateWanConfigurationStatus'
);

export const updateWanConfiguration = createAction(
  '[landing-zone-wan-connection-edit] Update Wan Configuration',
  props<{ wanConfiguration: WanConfiguration }>()
);
export const updateWanConfigurationSuccess = createAction(
  '[landing-zone-wan-connection-edit] updateWanConfigurationSuccess'
);
export const updateWanConfigurationError = createAction(
  '[landing-zone-wan-connection-edit] updateWanConfigurationError',
  props<{ error: any }>()
);
export const resetUpdateWanConfigurationStatus = createAction(
  '[landing-zone-wan-connection-edit] resetUpdateWanConfigurationStatus'
);
export const startConnectionDeployment = createAction(
  '[landing-zone-wan-deploy-connection] Start Deployment',
  props<{ name: string }>()
);
export const stopConnectionDeployment = createAction(
  '[landing-zone-wan-deploy-connection] Stop Deployment',
  props<{ name: string }>()
);
export const updateConnectionDeploymentProgress = createAction(
  '[landing-zone-wan-deploy-connection] Update Deployment Progress',
  props<{ name: string; progress: number }>()
);
export const dismissDeploymentConnectionReadyAlert = createAction(
  '[landing-zone-wan-deploy-connection] Stop showing off deployment ready alert'
);
