import { createReducer, on, createSelector } from '@ngrx/store';
import {
  getSharedServicesActions,
  getSharedServicesActionsError,
  getSharedServicesActionsSuccess
} from './shared-services-home.actions';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';
import { SharedServicesAction } from '../shared-services.model';

export const initialState = {
  getsharedServicesActionsStatus: defaultLoadable() as Loadable,
  sharedServicesActions: [] as SharedServicesAction[]
};

export interface SharedServicesHomeState {
  getsharedServicesActionsStatus: Loadable;
  sharedServicesActions: SharedServicesAction[];
}

export const featureKey = 'sharedServicesHome';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getSharedServicesActions, state => ({ ...state, getsharedServicesActionsStatus: onLoadableInit() })),
  on(getSharedServicesActionsError, (state, { error }) => ({
    ...state,
    getsharedServicesActionsStatus: onLoadableError(error)
  })),
  on(getSharedServicesActionsSuccess, (state, { sharedServicesActions }) => ({
    ...state,
    getsharedServicesActionsStatus: onLoadableSuccess(),
    sharedServicesActions
  }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey] as SharedServicesHomeState;

export const selectGetsharedServicesActionsStatus = createSelector(
  selectFeature,
  state => state && state.getsharedServicesActionsStatus
);
export const selectSharedServicesActions = createSelector(selectFeature, state => state && state.sharedServicesActions);
