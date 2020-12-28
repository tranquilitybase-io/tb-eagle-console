import './shared-service.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';

export const initialState = {};

export interface LandingZoneState {}

export const featureKey = 'landingZone';

export const usersReducer = createReducer(initialState);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey] as LandingZoneState;
