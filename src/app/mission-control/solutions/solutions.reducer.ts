import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';

import {
  createSolution,
  createSolutionError,
  createSolutionSuccess,
  discardSelectedSolution,
  getSolutions,
  getSolutionsError,
  getSolutionsSuccess,
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
  createSolutionStatus: defaultLoadable() as Loadable,
  dismissAlmostReady: false,
  getSolutionsStatus: defaultLoadable() as Loadable,
  isDeploymentReady: false,
  selectedSolution: undefined,
  solutionDeploymentsData: [],
  solutions: [] as Solution[],
  startDeploymentStatus: defaultLoadable() as Loadable,
  updateSolutionStatus: defaultLoadable() as Loadable
};

export interface SolutionsState {
  createSolutionStatus: Loadable;
  dismissAlmostReady: boolean;
  getSolutionsStatus: Loadable;
  isDeploymentReady: boolean;
  selectedSolution: Solution;
  solutionDeploymentsData: SolutionDeployment[];
  solutions: Solution[];
  startDeploymentStatus: Loadable;
  updateSolutionStatus: Loadable;
}
export const solutionFeatureKey = 'solutions';

export const solutionsReducer = createReducer(
  intialState,
  on(discardSelectedSolution, state => ({ ...state, selectedSolution: undefined })),
  on(setSelectedSolution, (state, { solution }) => ({ ...state, selectedSolution: solution })),
  // getAll
  on(getSolutions, state => ({ ...state, getSolutionsStatus: onLoadableInit() })),
  on(getSolutionsError, (state, { error }) => ({ ...state, getSolutionsStatus: onLoadableError(error) })),
  on(getSolutionsSuccess, (state, { solutions }) => ({ ...state, solutions, getSolutionsStatus: onLoadableSuccess() })),
  // update
  on(updateSolution, (state, { solution }) => ({
    ...state,
    selectedSolution: solution,
    updateSolutionStatus: onLoadableInit()
  })),
  on(updateSolutionError, (state, { error }) => ({ ...state, updateSolutionStatus: onLoadableError(error) })),
  on(updateSolutionSuccess, state => ({ ...state, updateSolutionStatus: onLoadableSuccess() })),
  on(resetUpdateSolutionStatus, state => ({ ...state, updateSolutionStatus: defaultLoadable() })),
  //
  on(createSolution, state => ({ ...state, createSolutionStatus: onLoadableInit() })),
  on(createSolutionError, (state, { error }) => ({ ...state, createSolutionStatus: onLoadableError(error) })),
  on(createSolutionSuccess, state => ({ ...state, createSolutionStatus: onLoadableSuccess() })),
  on(resetCreateSolutionStatus, state => ({ ...state, createSolutionStatus: defaultLoadable() })),
  on(setSolutionDeploymentsData, (state, { solutionDeploymentsData }) => {
    if (JSON.stringify(solutionDeploymentsData) !== JSON.stringify(state.solutionDeploymentsData)) {
      return { ...state, solutionDeploymentsData };
    }
    return state;
  }),

  on(startDeploymentError, (state, { error }) => ({ ...state, startDeploymentStatus: onLoadableError(error) })),
  on(startDeploymentSuccess, state => ({ ...state, startDeploymentStatus: onLoadableSuccess() }))
);

export default function reducer(state, action) {
  return solutionsReducer(state, action);
}

export const selectFeature = state => state[solutionFeatureKey] as SolutionsState;
export const selectSelectedSolution = createSelector(selectFeature, state => state && state.selectedSolution);
export const selectIsSelectedSolution = createSelector(selectFeature, state =>
  Boolean(state && state.selectedSolution)
);

export const selectSolutionDeploymentsData = createSelector(
  selectFeature,
  state => state && state.solutionDeploymentsData
);

export const selectCreateSolutionStatus = createSelector(selectFeature, state => state && state.createSolutionStatus);
export const selectGetSolutionsStatus = createSelector(selectFeature, state => state && state.getSolutionsStatus);
export const selectStartDeploymentStatus = createSelector(selectFeature, state => state && state.startDeploymentStatus);
export const selectUpdateSolutionStatus = createSelector(selectFeature, state => state && state.updateSolutionStatus);
