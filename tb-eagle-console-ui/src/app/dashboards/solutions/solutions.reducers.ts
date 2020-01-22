import { createReducer, on, createSelector, select, createFeatureSelector } from '@ngrx/store';

import { setFavourites, refreshSolutions } from './solutions.actions';
import { Solution } from './interfaces';

export const intialState = { solutions: [{}], visibilityFilter: 'Favuorites' };

export interface SolutionsState {
  solutions: Solution[];
  visibilityFilter: string;
}
export const solutionFeatureKey = 'solutions';

export const solutionsReducer = createReducer(
  intialState,
  on(setFavourites, (state, action) => {
    state.solutions = action.solutions;
    return state;
  })
);
export default function reducer(state, action) {
  return solutionsReducer(state, action);
}

export const selectFeature = state => state[solutionFeatureKey];

export const selectVisibleSolutions = createSelector(selectFeature, ({ solutions }) => solutions);
