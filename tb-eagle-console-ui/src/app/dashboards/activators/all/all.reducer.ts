import { createReducer, createSelector, on } from '@ngrx/store';

import { updateDeploymentProgress, startDeployment, stopDeployment } from './all.actions';

export const featureKey = 'all-activators';

const activatorReducer = createReducer(
  {
    progress: 0,
    inProgress: false
  },
  on(startDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopDeployment, state => ({ ...state, inProgress: false })),
  on(updateDeploymentProgress, (state, { progress }) => ({ ...state, progress }))
);

export default function(state = {}, action) {
  if ([startDeployment.type, updateDeploymentProgress.type, stopDeployment.type].includes(action.type)) {
    return {
      ...state,
      [action.name]: activatorReducer(state[action.name], action)
    };
  }

  return state;
}

export const selectFeature = state => state[featureKey];
export const selectProgress = name => createSelector(selectFeature, state => (state[name] ? state[name].progress : 0));
export const selectInProgress = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgress : false));
