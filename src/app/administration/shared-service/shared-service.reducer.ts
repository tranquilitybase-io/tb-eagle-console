import { SharedServicesItem } from './shared-service.model';
import {
  getSharedServicesItems,
  getSharedServicesItemsError,
  getSharedServicesItemsSuccess
} from './shared-service.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';

export const initialState = {
  sharedServicesItems: [] as SharedServicesItem[],
  getSharedServicesItemsStatus: defaultLoadable() as Loadable
};

export interface LandingZoneState {
  sharedServicesItems: SharedServicesItem[];
  getSharedServicesItemsStatus: Loadable;
}

export const featureKey = 'landingZone';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getSharedServicesItems, state => ({ ...state, getSharedServicesItemsStatus: onLoadableInit() })),
  on(getSharedServicesItemsError, (state, { error }) => ({
    ...state,
    getSharedServicesItemsStatus: onLoadableError(error)
  })),
  on(getSharedServicesItemsSuccess, (state, { sharedServicesItems }) => ({
    ...state,
    sharedServicesItems,
    getSharedServicesItemsStatus: onLoadableSuccess()
  }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey] as LandingZoneState;

export const selectSharedServicesItems = createSelector(selectFeature, state => state && state.sharedServicesItems);
export const selectGetSharedServicesItemsStatus = createSelector(
  selectFeature,
  state => state && state.getSharedServicesItemsStatus
);
