import { createReducer, on, createSelector } from '@ngrx/store';
import {
  getLandingZoneProgressItems,
  getLandingZoneProgressItemsError,
  getLandingZoneProgressItemsSuccess,
} from './landing-zone.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess,
} from '@app/shared/shared.reducer';
import { LandingZoneProgressItem } from './landing-zone.model';

export const initialState = {
  getlandingZoneProgressItemsStatus: defaultLoadable() as Loadable,
  landingZoneProgressItems: [] as LandingZoneProgressItem[],
};

export interface LandingZoneState {
  getlandingZoneProgressItemsStatus: Loadable;
  landingZoneProgressItems: LandingZoneProgressItem[];
}

export const featureKey = 'landingZone';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getLandingZoneProgressItems, (state) => ({ ...state, getUsersStatus: onLoadableInit() })),
  on(getLandingZoneProgressItemsError, (state, { error }) => ({ ...state, getUsersStatus: onLoadableError(error) })),
  on(getLandingZoneProgressItemsSuccess, (state, { landingZoneProgressItems }) => ({
    ...state,
    getUsersStatus: onLoadableSuccess(),
    landingZoneProgressItems,
  }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = (state) => state[featureKey] as LandingZoneState;

export const selectGetLandingZoneProgressItemsStatus = createSelector(
  selectFeature,
  (state) => state && state.getlandingZoneProgressItemsStatus
);
export const selectLandingZoneEnvironmentReadOnly = createSelector(
  selectFeature,
  (state) => state && state.landingZoneProgressItems.some((item) => item.label === 'Environment' && item.completed)
);
export const selectLandingZoneProgressItems = createSelector(
  selectFeature,
  (state) => state && state.landingZoneProgressItems
);
