import './shared-service-home.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';

export const initialState = {};

export interface SharedServiceHomeState {}

export const featureKey = 'sharedServiceHome';

export const usersReducer = createReducer(
  initialState
  // get
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey] as SharedServiceHomeState;
