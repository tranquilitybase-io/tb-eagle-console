import { createReducer } from '@ngrx/store';

export const featureKey = 'team-members';

const initialState = {};
const innerReducer = createReducer(initialState);

export default function reducer(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = state => state[featureKey];
