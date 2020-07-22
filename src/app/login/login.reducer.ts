import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { loginSuccess, loginFailure } from './login.actions';
import { User } from './login.model';

export const loginFeatureKey = 'login-reducer';

export interface State {
  isAuthenticated: boolean;
}

export const initialState: State = {
  isAuthenticated: false
};

const loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'True');
    return { ...state, user, isAuthenticated: true };
  }),
  on(loginFailure, state => {
    localStorage.clear();
    return state;
  })
);

export function reducer(state: State, action: Action) {
  return loginReducer(state, action);
}

export const selectFeature = state => state[loginFeatureKey];
export const selectIsAuthenticated = createSelector(
  selectFeature,
  ({ isAuthenticated }) => isAuthenticated || localStorage.getItem('isAuthenticated') === 'True'
);
export const selectUser = createSelector(selectFeature, () => JSON.parse(localStorage.getItem('user')) as User);
export const selectUserIsAdmin = createSelector(
  selectFeature,
  () => (JSON.parse(localStorage.getItem('user')) as User).isAdmin
);
export const selectUserName = createSelector(
  selectFeature,
  () => (JSON.parse(localStorage.getItem('user')) as User).firstName
);
export const selectUserTeams = createSelector(
  selectFeature,
  () => (JSON.parse(localStorage.getItem('user')) as User).teams as string[]
);
export const selectUserInitials = createSelector(selectFeature, () => {
  const user = JSON.parse(localStorage.getItem('user')) as User;
  return user.firstName[0] + user.lastName[0];
});
export const selectShowWelcome = createSelector(
  selectFeature,
  () => (JSON.parse(localStorage.getItem('user')) as User).showWelcome
);
export const selectUserId = createSelector(selectFeature, () => (JSON.parse(localStorage.getItem('user')) as User).id);
