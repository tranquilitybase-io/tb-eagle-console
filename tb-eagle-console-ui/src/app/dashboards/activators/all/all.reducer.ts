import { createReducer, createSelector, on } from '@ngrx/store';

import {
  updateDeploymentProgress,
  startDeployment,
  stopDeployment,
  dismissAlmostReadyAlert,
  dismissDeploymentReadyAlert
} from './all.actions';

export interface AllState {
  dismissAlmostReady: boolean;
  isDeploymentReady: boolean;
}

export const featureKey = 'all-activators';

const activatorReducer = createReducer(
  {
    progress: 0,
    inProgress: false,
    dismissAlmostReady: false,
    isDeploymentReady: false
  },
  on(startDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopDeployment, state => ({ ...state, inProgress: false })),
  on(updateDeploymentProgress, (state, { progress }) => ({ ...state, progress })),
  on(dismissDeploymentReadyAlert, state => ({ ...state, isDeploymentReady: false })),
  on(dismissAlmostReadyAlert, state => ({ ...state, dismissAlmostReady: true }))
);

export default function(state, action) {
  if ([startDeployment.type, updateDeploymentProgress.type, stopDeployment.type].includes(action.type)) {
    return {
      ...state,
      [action.name]: activatorReducer(state[action.name], action),
      isDeploymentReady: action.type === stopDeployment.type || state['isDeploymentReady'],
      dismissAlmostReady:
        action.type === startDeployment.type
          ? false
          : action.type === stopDeployment.type || state['dismissAlmostReady']
    };
  }

  return activatorReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectProgress = name => createSelector(selectFeature, state => (state[name] ? state[name].progress : 0));
export const selectInProgress = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgress : false));

export const selectIsDeploymentReady = createSelector(selectFeature, state => state.isDeploymentReady);
export const selectIsAlmostReady = createSelector(
  selectFeature,
  state => !state['dismissAlmostReady'] && Object.values(state).some(deployment => deployment['inProgress'])
);
