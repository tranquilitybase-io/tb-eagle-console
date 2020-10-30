import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';
import { createReducer, createSelector, on } from '@ngrx/store';

import {
  getByCategory,
  getByCategorySuccess,
  getByCategoryError,
  createActivatorByURL,
  createActivatorByURLError,
  createActivatorByURLSuccess,
  denyAccess,
  denyAccessError,
  denyAccessSuccess,
  grantAccess,
  grantAccessError,
  grantAccessSuccess,
  requestAccess,
  requestAccessError,
  requestAccessSuccess,
  resetActivatorDataStatus,
  resetAPICallStatuses,
  setActivatorsCount,
  setCategoriesCount,
  setDeprecated,
  setDeprecatedError,
  setDeprecatedSuccess,
  setLocked,
  setLockedError,
  setLockedSuccess,
  setProgress,
  storeActivatorData,
  updateActivator,
  updateActivatorError,
  updateActivatorSuccess
} from './activator-store.actions';
import { Activator } from './activator-store.model';

export const featureKey = 'activator-store';

const initialState = {
  activators: [] as Activator[],
  getByCategoryStatus: defaultLoadable() as Loadable,
  activatorData: {} as Activator,
  activatorDataStatus: defaultLoadable() as Loadable,
  activatorsByCategoryData: [],
  denyAccessStatus: defaultLoadable() as Loadable,
  grantAccessStatus: defaultLoadable() as Loadable,
  requestAccessStatus: defaultLoadable() as Loadable,
  setDeprecatedStatus: defaultLoadable() as Loadable,
  setLockedStatus: defaultLoadable() as Loadable,
  step: 0,
  updateActivatorStatus: defaultLoadable() as Loadable
};
const innerReducer = createReducer(
  initialState,
  on(setDeprecated, state => ({ ...state, setDeprecatedStatus: onLoadableInit() })),
  on(setDeprecatedSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    setDeprecatedStatus: onLoadableSuccess()
  })),
  on(setDeprecatedError, (state, { error }) => ({ ...state, setDeprecatedStatus: onLoadableError(error) })),
  on(setLocked, state => ({ ...state, setLockedStatus: onLoadableInit() })),
  on(setLockedSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    setLockedStatus: onLoadableSuccess()
  })),
  on(setLockedError, (state, { error }) => ({ ...state, setLockedStatus: onLoadableError(error) })),
  on(denyAccess, state => ({ ...state, denyAccessStatus: onLoadableInit() })),
  on(denyAccessSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    denyAccessStatus: onLoadableSuccess()
  })),
  on(denyAccessError, (state, { error }) => ({ ...state, denyAccessStatus: onLoadableError(error) })),
  on(grantAccess, state => ({ ...state, grantAccessStatus: onLoadableInit() })),
  on(grantAccessSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    grantAccessStatus: onLoadableSuccess()
  })),
  on(grantAccessError, (state, { error }) => ({ ...state, grantAccessStatus: onLoadableError(error) })),
  on(requestAccess, state => ({ ...state, requestAccessStatus: onLoadableInit() })),
  on(requestAccessSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    requestAccessStatus: onLoadableSuccess()
  })),
  on(requestAccessError, (state, { error }) => ({ ...state, requestAccessStatus: onLoadableError(error) })),
  on(setActivatorsCount, (state, { activatorsCount }) => ({ ...state, activatorsCount })),
  on(setCategoriesCount, (state, { categoriesCount }) => ({ ...state, categoriesCount })),
  on(setProgress, (state, { step }) => ({ ...state, step })),
  on(storeActivatorData, (state, { activatorData }) => ({ ...state, activatorData })),
  on(getByCategory, state => ({ ...state, getByCategoryStatus: onLoadableInit() })),
  on(getByCategorySuccess, (state, { activators }) => ({
    ...state,
    activatorsByCategoryData: activators,
    getByCategoryStatus: onLoadableSuccess()
  })),
  on(getByCategoryError, (state, { error }) => ({ ...state, getByCategoryStatus: onLoadableError(error) })),
  on(createActivatorByURL, state => ({ ...state, activatorDataStatus: onLoadableInit() })),
  on(createActivatorByURLSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    activatorDataStatus: onLoadableSuccess()
  })),
  on(createActivatorByURLError, (state, { error }) => ({ ...state, activatorDataStatus: onLoadableError(error) })),
  on(updateActivator, state => ({ ...state, updateActivatorStatus: onLoadableInit() })),
  on(updateActivatorSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    updateActivatorStatus: onLoadableSuccess()
  })),
  on(updateActivatorError, (state, { error }) => ({ ...state, updateActivatorStatus: onLoadableError(error) })),
  on(resetActivatorDataStatus, state => ({ ...state, activatorDataStatus: defaultLoadable() })),
  on(resetAPICallStatuses, state => ({
    ...state,
    activatorDataStatus: defaultLoadable(),
    setDeprecatedStatus: defaultLoadable(),
    setLockedStatus: defaultLoadable(),
    denyAccessStatus: defaultLoadable(),
    grantAccessStatus: defaultLoadable(),
    requestAccessStatus: defaultLoadable(),
    updateActivatorStatus: defaultLoadable()
  }))
);

export default function reducer(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectProgress = createSelector(selectFeature, ({ step }) => step);
export const selectCategoriesCount = createSelector(selectFeature, ({ categoriesCount }) => categoriesCount);
export const selectActivatorsCount = createSelector(selectFeature, ({ activatorsCount }) => activatorsCount);
export const selectActivatorsByCategoryData = createSelector(selectFeature, state =>
  state ? state.activatorsByCategoryData : ([] as Activator[])
);

export const selectActivatorData = createSelector(
  selectFeature,
  ({ activatorData }) => activatorData || ({} as Activator)
);

export const selectActivatorDataStatus = createSelector(
  selectFeature,
  ({ activatorDataStatus }) => activatorDataStatus as Loadable
);

export const selectGetByCategoryStatus = createSelector(selectFeature, state => state.getByCategoryStatus);
export const selectDenyAccessStatus = createSelector(selectFeature, state => state && state.denyAccessStatus);
export const selectGrantAccessStatus = createSelector(selectFeature, state => state && state.grantAccessStatus);
export const selectRequestAccessStatus = createSelector(selectFeature, state => state && state.requestAccessStatus);
export const selectSetDeprecatedStatus = createSelector(selectFeature, state => state && state.setDeprecatedStatus);
export const selectSetLockedStatus = createSelector(selectFeature, state => state && state.setLockedStatus);
export const selectUpdateActivatorStatus = createSelector(selectFeature, state => state && state.updateActivatorStatus);
