import { createReducer } from '@ngrx/store';

export const featureKey = 'activator-store';

const initialState = {};
const innerReducer = createReducer(initialState);

export const reducer = (state, action) => {
  return innerReducer(state, action);
};

export const selectFeature = state => state[featureKey];
