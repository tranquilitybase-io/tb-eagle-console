import { createReducer, on, createSelector, select, createFeatureSelector } from '@ngrx/store';

import {
  setSolutions,
  updateDeploymentProgress,
  startDeployment,
  stopDeployment,
  dismissAlmostReadyAlert,
  dismissDeploymentReadyAlert,
  setSelectedSolution,
  discardSelectedSolution,
  startDeployApplication,
  updateDeploymentProgressApp,
  stopDeploymentApp
} from './solutions.actions';
import { Solution } from './interfaces';

export const intialState = {
  solutions: [{}],
  visibilityFilter: 'Favourites',
  dismissAlmostReady: false,
  isDeploymentReady: false
};

export interface SolutionsState {
  solutions: Solution[];
  visibilityFilter: string;
  dismissAlmostReady: boolean;
  isDeploymentReady: boolean;
}
export const solutionFeatureKey = 'solution-landing';

export const solutionsReducer = createReducer(
  intialState,
  on(setSolutions, (state, action) => {
    const filter = action.filter;
    if (filter === 'Favourites') {
      state.solutions = action.solutions.filter(solution => solution.favourite === true);
      state.visibilityFilter = action.filter;
    }
    if (filter === 'Active') {
      state.solutions = action.solutions.filter(solution => solution.active === true);
      state.visibilityFilter = action.filter;
    }
    if (filter === 'Archived') {
      state.solutions = action.solutions.filter(solution => solution.active === false);
      state.visibilityFilter = action.filter;
    }

    return state;
  }),
  on(setSelectedSolution, (state, { solution }) => ({ ...state, selectedSolution: solution })),
  on(discardSelectedSolution, state => ({ ...state, selectedSolution: undefined })),
  on(startDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopDeployment, state => ({ ...state, inProgress: false })),
  on(updateDeploymentProgress, (state, { progress }) => ({ ...state, progress })),
  on(dismissDeploymentReadyAlert, state => ({ ...state, isDeploymentReady: false })),
  on(dismissAlmostReadyAlert, state => ({ ...state, dismissAlmostReady: true })),
  on(startDeployApplication, state => ({ ...state, progressApp: 0, inProgressApp: true })),
  on(updateDeploymentProgressApp, (state, { progressApp }) => ({ ...state, progressApp })),
  on(stopDeploymentApp, state => ({ ...state, inProgressApp: false }))
);

export default function reducer(state, action) {
  if ([startDeployment.type, updateDeploymentProgress.type, stopDeployment.type].includes(action.type)) {
    return {
      ...state,
      [action.name]: solutionsReducer(state[action.name], action),
      isDeploymentReady: action.type === stopDeployment.type || state.isDeploymentReady,
      dismissAlmostReady:
        action.type === startDeployment.type ? false : action.type === stopDeployment.type || state.dismissAlmostReady
    };
  }

  if ([startDeployApplication.type, updateDeploymentProgressApp.type, stopDeploymentApp.type].includes(action.type)) {
    return {
      ...state,
      [action.name]: solutionsReducer(state[action.name], action),
      isDeploymentReady: action.type === stopDeploymentApp.type || state.isDeploymentReady,
      dismissAlmostReady:
        action.type === startDeployApplication.type
          ? false
          : action.type === stopDeploymentApp.type || state.dismissAlmostReady
    };
  }

  return solutionsReducer(state, action);
}

export const selectFeature = state => state[solutionFeatureKey];
export const selectProgress = name => createSelector(selectFeature, state => (state[name] ? state[name].progress : 0));
export const selectInProgress = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgress : false));

export const selectVisibleSolutions = createSelector(selectFeature, ({ solutions }) => solutions);
export const selectIsDeploymentReady = createSelector(selectFeature, state => state.isDeploymentReady);
export const selectIsAlmostReady = createSelector(
  selectFeature,
  state => !state.dismissAlmostReady && Object.values(state).some(deployment => deployment['inProgress'])
);
export const selectSelectedSolution = createSelector(selectFeature, state => state['selectedSolution']);

export const selectProgressApp = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].progressApp : 0));
export const selectInProgressApp = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgressApp : false));
