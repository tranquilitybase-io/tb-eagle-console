import { createReducer, createSelector, on } from '@ngrx/store';

import { changePage, setLength } from './view.actions';

export const featureKey = 'activators-view';

const initialState = {
  page: 1,
  length: 0
};

const innerReducer = createReducer(
  initialState,
  on(changePage, (state, { page }) => ({ ...state, page })),
  on(setLength, (state, { length }) => ({ ...state, length }))
);

export default function(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = ({ [featureKey]: state }) => state;
export const selectPage = createSelector(selectFeature, ({ page }) => page);
export const selectLength = createSelector(selectFeature, ({ length }) => length);
