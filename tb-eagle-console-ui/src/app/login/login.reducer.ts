import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { loginSuccess, loginFailure } from './login.actions';

export const loginFeatureKey = 'login-reducer';

export interface State {
  loggedIn: boolean;
}

export const initialState: State = {
  loggedIn: false
};

const loginReducer = createReducer(
  initialState,
  on(loginSuccess, state => ({ ...state, loggedIn: true })),
  on(loginFailure, state => ({ ...state, loggedIn: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}

export const selectFeature = state => state[loginFeatureKey];
export const selectLoggedIn = createSelector(selectFeature, ({ loggedIn }) => loggedIn);
export const selectUser = createSelector(selectFeature, ({ user }) => user);
