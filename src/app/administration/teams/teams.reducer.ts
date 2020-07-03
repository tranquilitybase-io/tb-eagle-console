import { createReducer } from '@ngrx/store';

export const initialState = {};

export interface TeamsState {}
export const featureKey = 'teams';

export const teamsReducer = createReducer(initialState);

export default function reducer(state, action) {
  return teamsReducer(state, action);
}

export const selectFeature = state => state[featureKey];
