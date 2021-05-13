import { createReducer, on, createSelector } from '@ngrx/store';
import {
  getLandingZoneActions,
  getLandingZoneActionsError,
  getLandingZoneActionsSuccess,
} from './landing-zone-home.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess,
} from '@app/shared/shared.reducer';
import { LandingZoneAction } from '../landing-zone.model';

export const initialState = {
  getlandingZoneActionsStatus: defaultLoadable() as Loadable,
  landingZoneActions: [] as LandingZoneAction[],
};

export interface LandingZoneHomeState {
  getlandingZoneActionsStatus: Loadable;
  landingZoneActions: LandingZoneAction[];
}

export const featureKey = 'landingZoneHome';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getLandingZoneActions, (state) => ({ ...state, getlandingZoneActionsStatus: onLoadableInit() })),
  on(getLandingZoneActionsError, (state, { error }) => ({
    ...state,
    getlandingZoneActionsStatus: onLoadableError(error),
  })),
  on(getLandingZoneActionsSuccess, (state, { landingZoneActions }) => ({
    ...state,
    getlandingZoneActionsStatus: onLoadableSuccess(),
    landingZoneActions,
  }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = (state) => state[featureKey] as LandingZoneHomeState;

export const selectGetlandingZoneActionsStatus = createSelector(
  selectFeature,
  (state) => state && state.getlandingZoneActionsStatus
);
export const selectLandingZoneActions = createSelector(selectFeature, (state) => state && state.landingZoneActions);
