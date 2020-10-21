import { onLoadableInit, onLoadableSuccess, onLoadableError } from './../../shared/shared.reducer';
import {
  getUsers,
  getUsersSuccess,
  getUsersError,
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
import { User } from './users.model';

export const initialState = {
  users: [] as User[],
  getUsersStatus: defaultLoadable() as Loadable,
  createUserDataStatus: defaultLoadable() as Loadable,
  updateUserDataStatus: defaultLoadable() as Loadable
};

export interface UsersState {
  users: User;
  getUsersStatus: Loadable;
  createUserDataStatus: Loadable;
  updateUserDataStatus: Loadable;
}
export const featureKey = 'users';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getUsers, state => ({ ...state, getUsersStatus: onLoadableInit() })),
  on(getUsersSuccess, (state, { users }) => ({ ...state, getUsersStatus: onLoadableSuccess(), users })),
  on(getUsersError, (state, { error }) => ({ ...state, getUsersStatus: onLoadableError(error) })),
  // create
  on(createUserData, state => ({ ...state, createUserDataStatus: onLoadableInit() })),
  on(createUserDataSuccess, state => ({ ...state, createUserDataStatus: onLoadableSuccess() })),
  on(createUserDataError, (state, { error }) => ({ ...state, createUserDataStatus: onLoadableError(error) })),
  on(resetCreateUserDataStatus, state => ({ ...state, createUserDataStatus: defaultLoadable() })),
  // update
  on(updateUserData, state => ({ ...state, updateUserDataStatus: onLoadableInit() })),
  on(updateUserDataSuccess, state => ({ ...state, updateUserDataStatus: onLoadableSuccess() })),
  on(updateUserDataError, (state, { error }) => ({ ...state, updateUserDataStatus: onLoadableError(error) })),
  on(resetUpdateDataStatus, state => ({ ...state, updateUserDataStatus: defaultLoadable() }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey];

export const selectUsers = createSelector(selectFeature, state => state && state.users);
export const selectGetUsersStatus = createSelector(selectFeature, state => state && state.getUsersStatus);
export const selectCreateUserDataStatus = createSelector(selectFeature, state => state && state.createUserDataStatus);
export const selectUpdateUserDataStatus = createSelector(selectFeature, state => state && state.updateUserDataStatus);
