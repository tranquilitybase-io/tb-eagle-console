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
  updateSolution,
  setSolutionDeploymentsData
} from './solutions.actions';
import { Solution, SolutionDeployment } from './solutions.model';

export const intialState = {
  solutions: [{}],
  visibilityFilter: 'Favourites',
  dismissAlmostReady: false,
  isDeploymentReady: false,
  solutionDeploymentsData: []
};

export interface SolutionsState {
  solutions: Solution[];
  visibilityFilter: string;
  dismissAlmostReady: boolean;
  isDeploymentReady: boolean;
  solutionDeploymentsData: SolutionDeployment[];
}
export const solutionFeatureKey = 'solution-landing';

export const solutionsReducer = createReducer(
  intialState,
  on(setSolutions, (state, action) => {
    const filter = action.filter;
    if (filter === 'Favourites') {
      state.solutions = action.solutions.filter(solution => solution.isFavourite);
      state.visibilityFilter = action.filter;
    }
    if (filter === 'Active') {
      state.solutions = action.solutions.filter(solution => solution.isActive);
      state.visibilityFilter = action.filter;
    }
    if (filter === 'Archived') {
      state.solutions = action.solutions.filter(solution => !solution.isActive);
      state.visibilityFilter = action.filter;
    }

    return state;
  }),
  on(setSelectedSolution, (state, { solution }) => ({ ...state, selectedSolution: solution })),
  on(discardSelectedSolution, state => ({ ...state, selectedSolution: undefined })),
  on(startDeployment, state => ({ ...state, progress: 0, inProgress: true })),
  on(stopDeployment, state => ({ ...state, inProgress: false, deployed: true })),
  on(updateDeploymentProgress, (state, { progress }) => ({ ...state, progress })),
  on(dismissDeploymentReadyAlert, state => ({ ...state, isDeploymentReady: false })),
  on(dismissAlmostReadyAlert, state => ({ ...state, dismissAlmostReady: true })),
  on(updateSolution, (state, { solution }) => ({ ...state, selectedSolution: solution })),
  on(setSolutionDeploymentsData, (state, { solutionDeploymentsData }) => {
    if (JSON.stringify(solutionDeploymentsData) !== JSON.stringify(state.solutionDeploymentsData)) {
      return { ...state, solutionDeploymentsData };
    }
    return state;
  })
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
export const selectDeployed = name =>
  createSelector(selectFeature, state => (state[name] ? state[name].deployed : false));
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

export const selectSolutionDeploymentsData = createSelector(
  selectFeature,
  state => state && state.solutionDeploymentsData
);
