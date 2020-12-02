import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';
import { SwitchFilter } from '@app/shared/switches/switches.model';
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
  toggleFavorites,
  toggleFavoritesError,
  toggleFavoritesSuccess,
  updateSolution,
  updateSolutionError,
  updateSolutionSuccess
} from './solutions.actions';
import { Solution, SolutionDeployment, FilterNames } from './solutions.model';

export interface LoadableFavorites extends Loadable {
  loadingIds: number[];
}

const updateListObject = (list, obj) => list.map(li => (li.id === obj.id ? obj : li));
const updateLoadingList = (list, id) => list.filter(li => li !== id);
const updateFilters = (solutions: Solution[]) => [
  { name: 'Actives', count: solutions.filter(solution => solution.isActive).length, defaultActive: true },
  { name: 'Archived', count: solutions.filter(solution => !solution.isActive).length, defaultActive: false },
  { name: 'Favourites', count: solutions.filter(solution => solution.isFavourite).length, defaultActive: false }
];

export const intialState = {
  createSolutionStatus: defaultLoadable() as Loadable,
  dismissAlmostReady: false,
  getSolutionsStatus: defaultLoadable() as Loadable,
  isDeploymentReady: false,
  selectedSolution: undefined,
  solutionDeploymentsData: [],
  solutions: [] as Solution[],
  startDeploymentStatus: defaultLoadable() as Loadable,
  updateSolutionStatus: defaultLoadable() as Loadable,
  toggleFavoritesStatus: {
    ...defaultLoadable(),
    loadingIds: [] as number[]
  } as LoadableFavorites,
  pendingFavoritesIds: [] as number[],
  solutionsHomeFilters: [
    { name: 'Actives', count: 0, defaultActive: true },
    { name: 'Archived', count: 0, defaultActive: false },
    { name: 'Favourites', count: 0, defaultActive: false }
  ] as SwitchFilter[]
};
export interface SolutionsState {
  createSolutionStatus: Loadable;
  dismissAlmostReady: boolean;
  getSolutionsStatus: Loadable;
  isDeploymentReady: boolean;
  pendingFavoritesIds: number[];
  selectedSolution: Solution;
  solutionDeploymentsData: SolutionDeployment[];
  solutions: Solution[];
  solutionsHomeFilters: SwitchFilter[];
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
  on(getSolutionsSuccess, (state, { solutions }) => ({
    ...state,
    getSolutionsStatus: onLoadableSuccess(),
    solutions,
    solutionsHomeFilters: updateFilters(solutions)
  })),
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
  on(startDeploymentSuccess, state => ({ ...state, startDeploymentStatus: onLoadableSuccess() })),
  on(toggleFavorites, (state, { solutionId }) => ({
    ...state,
    pendingFavoritesIds: [...state.pendingFavoritesIds, solutionId]
  })),
  on(toggleFavoritesSuccess, (state, { solution }) => {
    const updatedSolutions = updateListObject(state.solutions, solution);
    return {
      ...state,
      pendingFavoritesIds: updateLoadingList(state.pendingFavoritesIds, solution.id),
      solutions: updatedSolutions,
      solutionsHomeFilters: updateFilters(updatedSolutions)
    };
  }),
  on(toggleFavoritesError, (state, { error }) => ({ ...state }))
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
export const selectPendingFavoritesId = createSelector(selectFeature, state => state && state.pendingFavoritesIds);
export const selectIsFavoriteLoading = id =>
  createSelector(selectFeature, state => {
    const selectedId = state.pendingFavoritesIds.find(favId => favId === id);
    return selectedId ? true : false;
  });

export const selectFilteredSolutions = (filterName: FilterNames) =>
  createSelector(selectFeature, state => {
    switch (filterName) {
      case FilterNames.ACTIVES:
        return [...state.solutions.filter(solution => solution.isActive)];
      case FilterNames.FAVOURITES:
        return [...state.solutions.filter(solution => solution.isFavourite)];
      case FilterNames.ARCHIVED:
        return [...state.solutions.filter(solution => !solution.isActive)];
      default:
        return [...state.solutions.filter(solution => solution.isActive)];
    }
  });

export const selectSolutionsHomeFilters = createSelector(selectFeature, state => state.solutionsHomeFilters);
