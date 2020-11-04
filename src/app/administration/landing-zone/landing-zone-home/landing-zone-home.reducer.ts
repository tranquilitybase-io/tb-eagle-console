import { createReducer, on, createSelector } from '@ngrx/store';
import {
  getLandingZoneActions,
  getLandingZoneActionsSuccess,
  getLandingZoneActionsError
} from './landing-zone-home.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableSuccess,
  onLoadableError,
  onLoadableInit
} from '@app/shared/shared.reducer';
import { LandingZoneAction } from '../landing-zone.model';

export const initialState = {
  landingZoneActions: [] as LandingZoneAction[],
  getlandingZoneActionsStatus: defaultLoadable() as Loadable
};

export interface LandingZoneHomeState {
  landingZoneActions: LandingZoneAction[];
  getlandingZoneActionsStatus: Loadable;
}

export const featureKey = 'landingZoneHome';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getLandingZoneActions, state => ({ ...state, getlandingZoneActionsStatus: onLoadableInit() })),
  on(getLandingZoneActionsSuccess, (state, { landingZoneActions }) => ({
    ...state,
    getlandingZoneActionsStatus: onLoadableSuccess(),
    landingZoneActions
  })),
  on(getLandingZoneActionsError, (state, { error }) => ({
    ...state,
    getlandingZoneActionsStatus: onLoadableError(error)
  }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey] as LandingZoneHomeState;

export const selectLandingZoneActions = createSelector(selectFeature, state => state && state.landingZoneActions);

export const selectGetlandingZoneActionsStatus = createSelector(
  selectFeature,
  state => state && state.getlandingZoneActionsStatus
);
