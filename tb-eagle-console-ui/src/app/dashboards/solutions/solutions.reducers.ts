import { createReducer, on, createSelector, select, createFeatureSelector } from '@ngrx/store';

import { refreshSolutions, setSolutions } from './solutions.actions';
import { Solution } from './interfaces';

export const intialState = { solutions: [{}], visibilityFilter: 'Favourites' };

export interface SolutionsState {
  solutions: Solution[];
  visibilityFilter: string;
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
  })
);
export default function reducer(state, action) {
  return solutionsReducer(state, action);
}

export const selectFeature = state => state[solutionFeatureKey];

export const selectVisibleSolutions = createSelector(selectFeature, ({ solutions }) => solutions);
