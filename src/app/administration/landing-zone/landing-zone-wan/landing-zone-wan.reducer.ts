import {
  Loadable,
  defaultLoadable,
  onLoadableInit,
  onLoadableSuccess,
  onLoadableError
} from '@app/shared/shared.reducer';
import { createReducer, on, createSelector, select, createFeatureSelector } from '@ngrx/store';

import { WanConfiguration } from './landing-zone-wan.model';

import {
  createWanConfiguration,
  createWanConfigurationSuccess,
  createWanConfigurationError,
  resetCreateWanConfigurationStatus,
  updateWanConfiguration,
  updateWanConfigurationSuccess,
  updateWanConfigurationError,
  resetUpdateWanConfigurationStatus,
  updateConnectionDeploymentProgress,
  startConnectionDeployment,
  stopConnectionDeployment,
  dismissDeploymentConnectionReadyAlert
} from './landing-zone-wan.actions';

export const intialState = {
  wanConfiguration: [{}],
  createWanConfigurationStatus: defaultLoadable() as Loadable,
  updateWanConfigurationStatus: defaultLoadable() as Loadable
};

export interface WanState {
  wanConfiguration: WanConfiguration[];
  createWanConfigurationStatus: Loadable;
  isConnectionDeploymentReady: boolean;
}
export const featureKey = 'landing-zone-wan';

export const landingZoneWanReducer = createReducer(
  intialState,
  on(createWanConfiguration, state => ({ ...state, createWanConfigurationStatus: onLoadableInit() })),
  on(createWanConfigurationSuccess, state => ({ ...state, createWanConfigurationStatus: onLoadableSuccess() })),
  on(createWanConfigurationError, (state, { error }) => ({
    ...state,
    createWanConfigurationStatus: onLoadableError(error)
  })),
  on(resetCreateWanConfigurationStatus, state => ({ ...state, createWanConfigurationStatus: defaultLoadable() })),
  on(startConnectionDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopConnectionDeployment, state => ({ ...state, inProgress: false, deployed: true })),
  on(updateConnectionDeploymentProgress, (state, { progress }) => ({ ...state, progress })),
  on(dismissDeploymentConnectionReadyAlert, state => ({ ...state, isConnectionDeploymentReady: false })),
  on(updateWanConfiguration, (state, { wanConfiguration }) => ({
    ...state,
    selectedConnection: wanConfiguration,
    updateWanConfigurationStatus: onLoadableInit()
  })),
  on(updateWanConfigurationSuccess, state => ({ ...state, updateWanConfigurationStatus: onLoadableSuccess() })),
  on(updateWanConfigurationError, (state, { error }) => ({
    ...state,
    updateWanConfigurationStatus: onLoadableError(error)
  })),
  on(resetUpdateWanConfigurationStatus, state => ({ ...state, updateWanConfigurationStatus: defaultLoadable() }))
);

export default function reducer(state, action) {
  if (
    [startConnectionDeployment.type, updateConnectionDeploymentProgress.type, stopConnectionDeployment.type].includes(
      action.type
    )
  ) {
    return {
      ...state,
      [action.name]: landingZoneWanReducer(state[action.name], action),
      isConnectionDeploymentReady: action.type === stopConnectionDeployment.type || state.isConnectionDeploymentReady,
      dismissAlmostReady:
        action.type === startConnectionDeployment.type
          ? false
          : action.type === stopConnectionDeployment.type || state.dismissAlmostReady
    };
  }

  return landingZoneWanReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectProgress = name => createSelector(selectFeature, state => (state[name] ? state[name].progress : 0));
export const selectInProgress = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgress : false));
export const selectDeployed = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].deployed : false));
export const selectIsDeploymentReady = createSelector(selectFeature, state => state.isConnectionDeploymentReady);
export const selectCreateWanConfigurationStatus = createSelector(
  selectFeature,
  state => state && state.createWanConfigurationStatus
);
export const selectUpdateWanConfigurationStatus = createSelector(
  selectFeature,
  state => state && state.updateWanConfigurationStatus
);
