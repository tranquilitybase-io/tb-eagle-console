import { createReducer, on, createSelector, select, createFeatureSelector } from '@ngrx/store';

import {
  refreshSolutions,
  setSolutions,
  updateDeploymentProgress,
  startDeployment,
  stopDeployment,
  dismissAlmostReadyAlert,
  dismissDeploymentReadyAlert
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
  on(startDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopDeployment, state => ({ ...state, inProgress: false })),
  on(updateDeploymentProgress, (state, { progress }) => ({ ...state, progress })),
  on(dismissDeploymentReadyAlert, state => ({ ...state, isDeploymentReady: false })),
  on(dismissAlmostReadyAlert, state => ({ ...state, dismissAlmostReady: true }))
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
