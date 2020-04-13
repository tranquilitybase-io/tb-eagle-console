import { createReducer, createSelector, on } from '@ngrx/store';

import { setProgress } from './activator-store.actions';

export const featureKey = 'activator-store';

const initialState = { step: 0 };
const innerReducer = createReducer(
  initialState,
  on(setProgress, (state, { step }) => ({ ...state, step }))
);

export default function reducer(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectProgress = createSelector(selectFeature, ({ step }) => step);
