import { createReducer, createSelector, on } from '@ngrx/store';

import { changePage } from './view.actions';

export const featureKey = 'activators-view';

const initialState = {
  page: 1
};

const innerReducer = createReducer(
  initialState,
  on(changePage, (state, { page }) => ({ page, ...state }))
);

export default function(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = ({ [featureKey]: state }) => state;
export const selectPage = createSelector(selectFeature, ({ page }) => page);
