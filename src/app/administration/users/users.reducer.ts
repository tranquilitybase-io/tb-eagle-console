import { createReducer, on } from '@ngrx/store';
import { User } from '@app/login/login.model';
import { initialState } from '@app/login/login.reducer';
import { updateUserData } from './users.actions';

export interface UsersState {
  users: User[];
}

export const featureKey = 'users';

export const usersReducer = createReducer(
  initialState,
  on(updateUserData, (state, { userData }) => ({ ...state, updateUserData: userData }))
);

export const reducer = (state, action) => {
  return usersReducer(state, action);
};

export const selectFeature = state => state[featureKey];
