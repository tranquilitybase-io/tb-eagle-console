import { createReducer, on, createSelector, select, createFeatureSelector } from '@ngrx/store';

import { WanConfiguration } from './landing-zone-wan.model';

import { updateDeploymentProgress, startDeployment, stopDeployment } from './landing-zone-wan.actions';

export const intialState = {
  wanConfiguration: [{}]
};

export interface SolutionsState {
  wanConfiguration: WanConfiguration[];
}
export const featureKey = 'landing-zone-wan';

export const landingZoneWanReducer = createReducer(
  intialState,
  on(startDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopDeployment, state => ({ ...state, inProgress: false })),
  on(updateDeploymentProgress, (state, { progress }) => ({ ...state, progress }))
);

export default function reducer(state, action) {
  if ([startDeployment.type, updateDeploymentProgress.type, stopDeployment.type].includes(action.type)) {
    return {
      ...state,
      [action.name]: landingZoneWanReducer(state[action.name], action),
      isDeploymentReady: action.type === stopDeployment.type || state.isDeploymentReady,
      dismissAlmostReady:
        action.type === startDeployment.type ? false : action.type === stopDeployment.type || state.dismissAlmostReady
    };
  }

  return landingZoneWanReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectProgress = name => createSelector(selectFeature, state => (state[name] ? state[name].progress : 0));
export const selectInProgress = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgress : false));
