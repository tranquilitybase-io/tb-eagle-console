import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';

import {
  getSolutions,
  getSolutionsSuccess,
  getSolutionsError,
  createSolution,
  createSolutionError,
  createSolutionSuccess,
  discardSelectedSolution,
  resetCreateSolutionStatus,
  resetUpdateSolutionStatus,
  setSelectedSolution,
  setSolutionDeploymentsData,
  startDeploymentError,
  startDeploymentSuccess,
  updateSolution,
  updateSolutionError,
  updateSolutionSuccess
} from './solutions.actions';
import { Solution, SolutionDeployment } from './solutions.model';

export const intialState = {
  solutions: [] as Solution[],
  getSolutionsStatus: defaultLoadable() as Loadable,
  createSolutionStatus: defaultLoadable() as Loadable,
  dismissAlmostReady: false,
  isDeploymentReady: false,
  selectedSolution: undefined,
  solutionDeploymentsData: [],
  startDeploymentStatus: defaultLoadable() as Loadable,
  updateSolutionStatus: defaultLoadable() as Loadable
};

export interface SolutionsState {
  solutions: Solution[];
  getSolutionsStatus: Loadable;
  createSolutionStatus: Loadable;
  dismissAlmostReady: boolean;
  isDeploymentReady: boolean;
  selectedSolution: Solution;
  solutionDeploymentsData: SolutionDeployment[];
  startDeploymentStatus: Loadable;
  updateSolutionStatus: Loadable;
}
export const solutionFeatureKey = 'solutions';

export const solutionsReducer = createReducer(
  intialState,
  on(setSelectedSolution, (state, { solution }) => ({ ...state, selectedSolution: solution })),
  on(discardSelectedSolution, state => ({ ...state, selectedSolution: undefined })),
  // getAll
  on(getSolutions, state => ({ ...state, getSolutionsStatus: onLoadableInit() })),
  on(getSolutionsSuccess, (state, { solutions }) => ({ ...state, solutions, getSolutionsStatus: onLoadableSuccess() })),
  on(getSolutionsError, (state, { error }) => ({ ...state, getSolutionsStatus: onLoadableError(error) })),
  // update
  on(updateSolution, (state, { solution }) => ({
    ...state,
    selectedSolution: solution,
    updateSolutionStatus: onLoadableInit()
  })),
  on(updateSolutionSuccess, state => ({ ...state, updateSolutionStatus: onLoadableSuccess() })),
  on(updateSolutionError, (state, { error }) => ({ ...state, updateSolutionStatus: onLoadableError(error) })),
  on(resetUpdateSolutionStatus, state => ({ ...state, updateSolutionStatus: defaultLoadable() })),
  //
  on(createSolution, state => ({ ...state, createSolutionStatus: onLoadableInit() })),
  on(createSolutionSuccess, state => ({ ...state, createSolutionStatus: onLoadableSuccess() })),
  on(createSolutionError, (state, { error }) => ({ ...state, createSolutionStatus: onLoadableError(error) })),
  on(resetCreateSolutionStatus, state => ({ ...state, createSolutionStatus: defaultLoadable() })),
  on(setSolutionDeploymentsData, (state, { solutionDeploymentsData }) => {
    if (JSON.stringify(solutionDeploymentsData) !== JSON.stringify(state.solutionDeploymentsData)) {
      return { ...state, solutionDeploymentsData };
    }
    return state;
  }),

  on(startDeploymentSuccess, state => ({ ...state, startDeploymentStatus: onLoadableSuccess() })),
  on(startDeploymentError, (state, { error }) => ({ ...state, startDeploymentStatus: onLoadableError(error) }))
);

export default function reducer(state, action) {
  return solutionsReducer(state, action);
}

export const selectFeature = state => state[solutionFeatureKey];
export const selectSelectedSolution = createSelector(selectFeature, state => state && state.selectedSolution);
export const selectIsSelectedSolution = createSelector(selectFeature, state =>
  Boolean(state && state.selectedSolution)
);

export const selectSolutionDeploymentsData = createSelector(
  selectFeature,
  state => state && state.solutionDeploymentsData
);

export const selectCreateSolutionStatus = createSelector(selectFeature, state => state && state.createSolutionStatus);
export const selectStartDeploymentStatus = createSelector(selectFeature, state => state && state.startDeploymentStatus);
export const selectUpdateSolutionStatus = createSelector(selectFeature, state => state && state.updateSolutionStatus);
