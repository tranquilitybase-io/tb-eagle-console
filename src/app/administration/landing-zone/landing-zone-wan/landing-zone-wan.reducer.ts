import {
  Loadable,
  defaultLoadable,
  onLoadableInit,
  onLoadableSuccess,
  onLoadableError
} from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';

import { WanConfiguration } from './landing-zone-wan.model';

import {
  getLandingZoneWans,
  getLandingZoneWansSuccess,
  getLandingZoneWansError,
  createWanConfiguration,
  createWanConfigurationError,
  createWanConfigurationSuccess,
  dismissDeploymentConnectionReadyAlert,
  resetCreateWanConfigurationStatus,
  resetUpdateWanConfigurationStatus,
  startConnectionDeployment,
  stopConnectionDeployment,
  updateConnectionDeploymentProgress,
  updateWanConfiguration,
  updateWanConfigurationError,
  updateWanConfigurationSuccess
} from './landing-zone-wan.actions';

export const intialState = {
  wanConfigurations: [] as WanConfiguration[],
  getLandingZoneWansStatus: defaultLoadable() as Loadable,
  createWanConfigurationStatus: defaultLoadable() as Loadable,
  updateWanConfigurationStatus: defaultLoadable() as Loadable,
  wanConfiguration: [{}]
};

export interface WanState {
  wanConfigurations: WanConfiguration[];
  getLandingZoneWansStatus: Loadable;
  createWanConfigurationStatus: Loadable;
  updateWanConfigurationStatus: Loadable;
  isConnectionDeploymentReady: boolean;
  wanConfiguration: WanConfiguration[];
}
export const featureKey = 'landing-zone-wan';

export const landingZoneWanReducer = createReducer(
  intialState,
  //get all
  on(getLandingZoneWans, state => ({ ...state, getLandingZoneWansStatus: onLoadableInit() })),
  on(getLandingZoneWansSuccess, (state, { wanConfigurations }) => ({
    ...state,
    wanConfigurations,
    getLandingZoneWansStatus: onLoadableSuccess()
  })),
  on(getLandingZoneWansError, (state, { error }) => ({ ...state, getLandingZoneWansStatus: onLoadableError(error) })),
  // create
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
  // update
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

export const selectFeature = state => state[featureKey] as WanState;
export const selectProgress = name => createSelector(selectFeature, state => (state[name] ? state[name].progress : 0));
export const selectInProgress = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgress : false));
export const selectDeployed = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].deployed : false));
export const selectWanConfigurations = createSelector(selectFeature, state => state.wanConfigurations);
export const selectGetLandingZoneWansStatus = createSelector(selectFeature, state => state.getLandingZoneWansStatus);
export const selectIsDeploymentReady = createSelector(selectFeature, state => state.isConnectionDeploymentReady);
export const selectCreateWanConfigurationStatus = createSelector(
  selectFeature,
  state => state && state.createWanConfigurationStatus
);
export const selectUpdateWanConfigurationStatus = createSelector(
  selectFeature,
  state => state && state.updateWanConfigurationStatus
);
