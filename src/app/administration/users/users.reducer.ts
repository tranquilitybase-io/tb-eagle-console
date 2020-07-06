import { createReducer } from '@ngrx/store';

export const initialState = {};

export interface UsersState {}
export const featureKey = 'users';

export const usersReducer = createReducer(initialState);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey];
