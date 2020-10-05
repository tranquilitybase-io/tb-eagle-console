import {
  Loadable,
  defaultLoadable,
  onLoadableInit,
  onLoadableSuccess,
  onLoadableError
} from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';

import {
  setSelectedSolution,
  discardSelectedSolution,
  updateSolution,
  setSolutionDeploymentsData,
  createSolution,
  createSolutionSuccess,
  createSolutionError
} from './solutions.actions';
import { Solution, SolutionDeployment } from './solutions.model';

export const intialState = {
  dismissAlmostReady: false,
  isDeploymentReady: false,
  solutionDeploymentsData: [],
  selectedSolution: undefined,
  createSolutionStatus: defaultLoadable() as Loadable
};

export interface SolutionsState {
  dismissAlmostReady: boolean;
  isDeploymentReady: boolean;
  selectedSolution: Solution;
  solutionDeploymentsData: SolutionDeployment[];
}
export const solutionFeatureKey = 'solutions';

export const solutionsReducer = createReducer(
  intialState,
  on(setSelectedSolution, (state, { solution }) => ({ ...state, selectedSolution: solution })),
  on(discardSelectedSolution, state => ({ ...state, selectedSolution: undefined })),
  on(updateSolution, (state, { solution }) => ({ ...state, selectedSolution: solution })),
  on(setSolutionDeploymentsData, (state, { solutionDeploymentsData }) => {
    if (JSON.stringify(solutionDeploymentsData) !== JSON.stringify(state.solutionDeploymentsData)) {
      return { ...state, solutionDeploymentsData };
    }
    return state;
  }),
  on(createSolution, state => ({ ...state, createSolutionStatus: onLoadableInit() })),
  on(createSolutionSuccess, state => ({ ...state, createSolutionStatus: onLoadableSuccess() })),
  on(createSolutionError, (state, { error }) => ({ ...state, createSolutionStatus: onLoadableError(error) }))
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
