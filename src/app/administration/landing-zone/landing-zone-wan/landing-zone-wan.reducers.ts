import { createReducer, on, createSelector, select, createFeatureSelector } from '@ngrx/store';

import { WanConfiguration } from './landing-zone-wan.model';

import {
  updateConnectionDeploymentProgress,
  startConnectionDeployment,
  stopConnectionDeployment,
  dismissDeploymentConnectionReadyAlert
} from './landing-zone-wan.actions';

export const intialState = {
  wanConfiguration: [{}]
};

export interface SolutionsState {
  wanConfiguration: WanConfiguration[];
}
export const featureKey = 'landing-zone-wan';

export const landingZoneWanReducer = createReducer(
  intialState,
  on(startConnectionDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopConnectionDeployment, state => ({ ...state, inProgress: false })),
  on(updateConnectionDeploymentProgress, (state, { progress }) => ({ ...state, progress })),
  on(dismissDeploymentConnectionReadyAlert, state => ({ ...state, isConnectionDeploymentReady: false }))
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
export const selectIsDeploymentReady = createSelector(selectFeature, state => state.isConnectionDeploymentReady);
