import { createReducer, createSelector, on } from '@ngrx/store';

import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';

import {
  createActivatorByURL,
  createActivatorByURLError,
  createActivatorByURLSuccess,
  denyAccess,
  denyAccessError,
  denyAccessSuccess,
  getActivatorCategories,
  getActivatorCategoriesError,
  getActivatorCategoriesSuccess,
  getActivators,
  getActivatorsError,
  getActivatorsSuccess,
  getMetaData,
  getMetaDataError,
  getMetaDataSuccess,
  grantAccess,
  grantAccessError,
  grantAccessSuccess,
  onboardActivator,
  onboardActivatorError,
  onboardActivatorSuccess,
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
import { Activator, ActivatorCategory } from './activator-store.model';

export const featureKey = 'activator-store';

const initialState = {
  activatorData: {} as Activator,
  activators: [] as Activator[],
  getActivatorsStatus: defaultLoadable() as Loadable,
  categories: [] as ActivatorCategory[],
  createActivatorByURLStatus: defaultLoadable() as Loadable,
  denyAccessStatus: defaultLoadable() as Loadable,
  getActivatorCategoriesStatus: defaultLoadable() as Loadable,
  getMetaDataStatus: defaultLoadable() as Loadable,
  grantAccessStatus: defaultLoadable() as Loadable,
  requestAccessStatus: defaultLoadable() as Loadable,
  setDeprecatedStatus: defaultLoadable() as Loadable,
  setLockedStatus: defaultLoadable() as Loadable,
  step: 0,
  updateActivatorStatus: defaultLoadable() as Loadable,
  onboardActivatorStatus: defaultLoadable() as Loadable
};
const innerReducer = createReducer(
  initialState,
  on(setDeprecated, state => ({ ...state, setDeprecatedStatus: onLoadableInit() })),
  on(setDeprecatedError, (state, { error }) => ({ ...state, setDeprecatedStatus: onLoadableError(error) })),
  on(setDeprecatedSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    setDeprecatedStatus: onLoadableSuccess()
  })),
  on(setLocked, state => ({ ...state, setLockedStatus: onLoadableInit() })),
  on(setLockedError, (state, { error }) => ({ ...state, setLockedStatus: onLoadableError(error) })),
  on(setLockedSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    setLockedStatus: onLoadableSuccess()
  })),
  on(denyAccess, state => ({ ...state, denyAccessStatus: onLoadableInit() })),
  on(denyAccessError, (state, { error }) => ({ ...state, denyAccessStatus: onLoadableError(error) })),
  on(denyAccessSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    denyAccessStatus: onLoadableSuccess()
  })),
  on(grantAccess, state => ({ ...state, grantAccessStatus: onLoadableInit() })),
  on(grantAccessError, (state, { error }) => ({ ...state, grantAccessStatus: onLoadableError(error) })),
  on(grantAccessSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    grantAccessStatus: onLoadableSuccess()
  })),
  on(requestAccess, state => ({ ...state, requestAccessStatus: onLoadableInit() })),
  on(requestAccessError, (state, { error }) => ({ ...state, requestAccessStatus: onLoadableError(error) })),
  on(requestAccessSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    requestAccessStatus: onLoadableSuccess()
  })),
  on(setActivatorsCount, (state, { activatorsCount }) => ({ ...state, activatorsCount })),
  on(setCategoriesCount, (state, { categoriesCount }) => ({ ...state, categoriesCount })),
  on(setProgress, (state, { step }) => ({ ...state, step })),
  on(storeActivatorData, (state, { activatorData }) => ({ ...state, activatorData })),
  // get activators
  on(getActivators, state => ({ ...state, getActivatorsStatus: onLoadableInit() })),
  on(getActivatorsError, (state, { error }) => ({ ...state, getActivatorsStatus: onLoadableError(error) })),
  on(getActivatorsSuccess, (state, { activators }) => ({
    ...state,
    activators,
    getActivatorsStatus: onLoadableSuccess()
  })),
  // get categories
  on(getActivatorCategories, state => ({ ...state, getActivatorCategoriesStatus: onLoadableInit() })),
  on(getActivatorCategoriesError, (state, { error }) => ({
    ...state,
    getActivatorCategoriesStatus: onLoadableError(error)
  })),
  on(getActivatorCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    getActivatorCategoriesStatus: onLoadableSuccess()
  })),
  // getMetaData
  on(getMetaData, state => ({ ...state, getMetaDataStatus: onLoadableInit() })),
  on(getMetaDataError, (state, { error }) => ({ ...state, getMetaDataStatus: onLoadableError(error) })),
  on(getMetaDataSuccess, state => ({ ...state, getMetaDataStatus: onLoadableSuccess() })),
  // createByUrl
  on(createActivatorByURL, state => ({ ...state, createActivatorByURLStatus: onLoadableInit() })),
  on(createActivatorByURLError, (state, { error }) => ({
    ...state,
    createActivatorByURLStatus: onLoadableError(error)
  })),
  on(createActivatorByURLSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    createActivatorByURLStatus: onLoadableSuccess()
  })),
  on(updateActivator, state => ({ ...state, updateActivatorStatus: onLoadableInit() })),
  on(updateActivatorError, (state, { error }) => ({ ...state, updateActivatorStatus: onLoadableError(error) })),
  on(updateActivatorSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    updateActivatorStatus: onLoadableSuccess()
  })),
  on(resetActivatorDataStatus, state => ({ ...state, activatorDataStatus: defaultLoadable() })),
  on(resetAPICallStatuses, state => ({
    ...state,
    createActivatorByURLStatus: defaultLoadable(),
    setDeprecatedStatus: defaultLoadable(),
    setLockedStatus: defaultLoadable(),
    denyAccessStatus: defaultLoadable(),
    grantAccessStatus: defaultLoadable(),
    requestAccessStatus: defaultLoadable(),
    updateActivatorStatus: defaultLoadable(),
    onboardActivatorStatus: defaultLoadable()
  })),
  // onboard
  on(onboardActivator, state => ({ ...state, onboardActivatorStatus: onLoadableInit() })),
  on(onboardActivatorError, (state, { error }) => ({ ...state, onboardActivatorStatus: onLoadableError(error) })),
  on(onboardActivatorSuccess, state => ({ ...state, onboardActivatorStatus: onLoadableSuccess() }))
);

export default function reducer(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = state => state[featureKey];

export const selectActivatorData = createSelector(
  selectFeature,
  ({ activatorData }) => activatorData || ({} as Activator)
);
export const selectActivators = createSelector(selectFeature, state =>
  state ? state.activators : ([] as Activator[])
);
export const selectActivatorsCount = createSelector(selectFeature, ({ activatorsCount }) => activatorsCount);
export const selectCategories = createSelector(selectFeature, state => state.categories);
export const selectCategoriesCount = createSelector(selectFeature, ({ categoriesCount }) => categoriesCount);
export const selectCreateActivatorByURLStatus = createSelector(
  selectFeature,
  ({ createActivatorByURLStatus }) => createActivatorByURLStatus as Loadable
);
export const selectDenyAccessStatus = createSelector(selectFeature, state => state && state.denyAccessStatus);
export const selectGetActivatorCategoriesStatus = createSelector(
  selectFeature,
  state => state.getActivatorCategoriesStatus
);
export const selectGetActivatorsStatus = createSelector(selectFeature, state => state.getActivatorsStatus);
export const selectGrantAccessStatus = createSelector(selectFeature, state => state && state.grantAccessStatus);
export const selectProgress = createSelector(selectFeature, ({ step }) => step);
export const selectRequestAccessStatus = createSelector(selectFeature, state => state && state.requestAccessStatus);
export const selectSetDeprecatedStatus = createSelector(selectFeature, state => state && state.setDeprecatedStatus);
export const selectSetLockedStatus = createSelector(selectFeature, state => state && state.setLockedStatus);
export const selectUpdateActivatorStatus = createSelector(selectFeature, state => state && state.updateActivatorStatus);
export const selectOnboardActivatorStatus = createSelector(
  selectFeature,
  state => state && state.onboardActivatorStatus
);
