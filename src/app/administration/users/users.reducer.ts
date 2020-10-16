import { onLoadableInit, onLoadableSuccess, onLoadableError } from './../../shared/shared.reducer';
import {
  createUserData,
  createUserDataError,
  createUserDataSuccess,
  resetCreateUserDataStatus,
  resetUpdateDataStatus,
  updateUserData,
  updateUserDataError,
  updateUserDataSuccess
} from './users.actions';
import { defaultLoadable, Loadable } from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';

export const initialState = {
  createUserDataStatus: defaultLoadable() as Loadable,
  updateUserDataStatus: defaultLoadable() as Loadable
};

export interface UsersState {
  createUserDataStatus: Loadable;
  updateUserDataStatus: Loadable;
}
export const featureKey = 'users';

export const usersReducer = createReducer(
  initialState,
  on(createUserData, state => ({ ...state, createUserDataStatus: onLoadableInit() })),
  on(createUserDataSuccess, state => ({ ...state, createUserDataStatus: onLoadableSuccess() })),
  on(createUserDataError, (state, { error }) => ({ ...state, createUserDataStatus: onLoadableError(error) })),
  on(resetCreateUserDataStatus, state => ({ ...state, createUserDataStatus: defaultLoadable() })),
  on(updateUserData, state => ({ ...state, updateUserDataStatus: onLoadableInit() })),
  on(updateUserDataSuccess, state => ({ ...state, updateUserDataStatus: onLoadableSuccess() })),
  on(updateUserDataError, (state, { error }) => ({ ...state, updateUserDataStatus: onLoadableError(error) })),
  on(resetUpdateDataStatus, state => ({ ...state, updateUserDataStatus: defaultLoadable() }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey];

export const selectCreateUserDataStatus = createSelector(selectFeature, state => state && state.createUserDataStatus);
export const selectUpdateUserDataStatus = createSelector(selectFeature, state => state && state.updateUserDataStatus);
