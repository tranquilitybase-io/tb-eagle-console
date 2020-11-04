import { createReducer, on, createSelector } from '@ngrx/store';
import {
  getLandingZoneProgressItems,
  getLandingZoneProgressItemsSuccess,
  getLandingZoneProgressItemsError
} from './landing-zone.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableSuccess,
  onLoadableError,
  onLoadableInit
} from '@app/shared/shared.reducer';
import { LandingZoneProgressItem } from './landing-zone.model';

export const initialState = {
  landingZoneProgressItems: [] as LandingZoneProgressItem[],
  getlandingZoneProgressItemsStatus: defaultLoadable() as Loadable
};

export interface LandingZoneState {
  landingZoneProgressItems: LandingZoneProgressItem[];
  getlandingZoneProgressItemsStatus: Loadable;
}

export const featureKey = 'landingZone';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getLandingZoneProgressItems, state => ({ ...state, getUsersStatus: onLoadableInit() })),
  on(getLandingZoneProgressItemsSuccess, (state, { landingZoneProgressItems }) => ({
    ...state,
    getUsersStatus: onLoadableSuccess(),
    landingZoneProgressItems
  })),
  on(getLandingZoneProgressItemsError, (state, { error }) => ({ ...state, getUsersStatus: onLoadableError(error) }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey] as LandingZoneState;

export const selectLandingZoneProgressItems = createSelector(
  selectFeature,
  state => state && state.landingZoneProgressItems
);
export const selectLandingZoneEnvironmentReadOnly = createSelector(
  selectFeature,
  state => state && state.landingZoneProgressItems.some(item => item.label === 'Environment' && item.completed)
);
export const selectGetLandingZoneProgressItemsStatus = createSelector(
  selectFeature,
  state => state && state.getlandingZoneProgressItemsStatus
);
