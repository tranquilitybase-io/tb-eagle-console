import { createReducer, on, createSelector } from '@ngrx/store';

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
  stopDeploymentApp,
  dismissDeploymentAppReadyAlert,
  startSolutionDeployment,
  stopSolutionDeployment,
  updateSolutionDeploymentProgress,
  dismissDeploymentSolutionReadyAlert,
  updateSolution
} from './solutions.actions';
import { Solution } from './solutions.model';

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
  on(stopDeploymentApp, state => ({ ...state, inProgressApp: false })),
  on(dismissDeploymentAppReadyAlert, state => ({ ...state, isDeploymentAppReady: false }))
);

export const solutionReducer = createReducer(
  intialState,
  on(startSolutionDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopSolutionDeployment, state => ({ ...state, inProgress: false })),
  on(updateSolutionDeploymentProgress, (state, { progress }) => ({ ...state, progress })),
  on(dismissDeploymentSolutionReadyAlert, state => ({ ...state, isSolutionDeploymentReady: false })),
  on(updateSolution, (state, { solution }) => ({ ...state, selectedSolution: solution }))
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
      isDeploymentAppReady: action.type === stopDeploymentApp.type || state.isDeploymentReady
    };
  }

  if (
    [startSolutionDeployment.type, updateSolutionDeploymentProgress.type, stopSolutionDeployment.type].includes(
      action.type
    )
  ) {
    return {
      ...state,
      [action.name]: solutionReducer(state[action.name], action),
      isSolutionDeploymentReady: action.type === stopSolutionDeployment.type || state.isSolutionDeploymentReady,
      dismissAlmostReady:
        action.type === startSolutionDeployment.type
          ? false
          : action.type === stopSolutionDeployment.type || state.dismissAlmostReady
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
export const selectSelectedSolution = createSelector(selectFeature, state => state && state['selectedSolution']);
export const selectIsSelectedSolution = createSelector(selectFeature, state =>
  Boolean(state && state['selectedSolution'])
);

export const selectProgressApp = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].progressApp : 0));
export const selectInProgressApp = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].inProgressApp : false));
export const selectIsDeploymentAppReady = createSelector(selectFeature, state => state.isDeploymentAppReady);
