import { createReducer, createSelector, on } from '@ngrx/store';
import {
  startDeployApplication,
  updateDeploymentProgressApp,
  stopDeploymentApp,
  dismissDeploymentAppReadyAlert
} from './applications.actions';

export const featureKey = 'application';

const initialState = {};
const innerReducer = createReducer(
  initialState,
  on(startDeployApplication, state => ({ ...state, progressApp: 0, inProgressApp: true })),
  on(updateDeploymentProgressApp, (state, { progressApp }) => ({ ...state, progressApp })),
  on(stopDeploymentApp, state => ({ ...state, inProgressApp: false, deployed: true })),
  on(dismissDeploymentAppReadyAlert, state => ({ ...state, isDeploymentAppReady: false }))
);

export default function reducer(state, action) {
  if ([startDeployApplication.type, updateDeploymentProgressApp.type, stopDeploymentApp.type].includes(action.type)) {
    return {
      ...state,
      [action.name]: innerReducer(state[action.name], action),
      isDeploymentAppReady: action.type === stopDeploymentApp.type || state.isDeploymentReady
    };
  }
  return innerReducer(state, action);
}

export const selectFeature = state => state[featureKey];

export const selectProgressApp = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].progressApp : 0));
export const selectDeployedApp = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].deployed : false));
export const selectInProgressApp = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgressApp : false));
export const selectIsDeploymentAppReady = createSelector(selectFeature, state => state.isDeploymentAppReady);
