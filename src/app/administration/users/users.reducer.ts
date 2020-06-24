import { createReducer } from '@ngrx/store';
import { User } from './users.model';
import { initialState } from '@app/login/login.reducer';

export interface EnvironmentState {
  users: User[];
}

export const featureKey = 'users';

export const usersReducer = createReducer(initialState);

export const reducer = (state, action) => {
  return usersReducer(state, action);
};

export const selectFeature = state => state[featureKey];
