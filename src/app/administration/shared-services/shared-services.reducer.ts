import { createReducer, on, createSelector } from '@ngrx/store';
import {
  getSharedServicesProgressItems,
  getSharedServicesProgressItemsError,
  getSharedServicesProgressItemsSuccess,
} from './shared-services.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess,
} from '@app/shared/shared.reducer';
import { SharedServicesProgressItem } from './shared-services.model';

export const initialState = {
  getsharedServicesProgressItemsStatus: defaultLoadable() as Loadable,
  sharedServicesProgressItems: [] as SharedServicesProgressItem[],
};

export interface SharedServicesState {
  getsharedServicesProgressItemsStatus: Loadable;
  sharedServicesProgressItems: SharedServicesProgressItem[];
}

export const featureKey = 'sharedServices';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getSharedServicesProgressItems, (state) => ({ ...state, getUsersStatus: onLoadableInit() })),
  on(getSharedServicesProgressItemsError, (state, { error }) => ({ ...state, getUsersStatus: onLoadableError(error) })),
  on(getSharedServicesProgressItemsSuccess, (state, { sharedServicesProgressItems }) => ({
    ...state,
    getUsersStatus: onLoadableSuccess(),
    sharedServicesProgressItems,
  }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = (state) => state[featureKey] as SharedServicesState;

export const selectGetSharedServicesProgressItemsStatus = createSelector(
  selectFeature,
  (state) => state && state.getsharedServicesProgressItemsStatus
);
export const selectSharedServicesEnvironmentReadOnly = createSelector(
  selectFeature,
  (state) => state && state.sharedServicesProgressItems.some((item) => item.label === 'Environment' && item.completed)
);
export const selectSharedServicesProgressItems = createSelector(
  selectFeature,
  (state) => state && state.sharedServicesProgressItems
);
