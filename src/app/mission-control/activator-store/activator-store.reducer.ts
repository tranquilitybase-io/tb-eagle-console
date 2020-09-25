import { createReducer, createSelector, on } from '@ngrx/store';

import {
  setProgress,
  setCategoriesCount,
  setActivatorsCount,
  setActivatorsByCategoryData,
  storeActivatorData,
  createActivatorByURL,
  createActivatorByURLSuccess,
  createActivatorByURLError
} from './activator-store.actions';
import { Activator } from './activator-store.model';

export interface Loadable {
  loading: boolean;
  success: boolean;
  error: any;
}

const createDefaultLoadable = (): Loadable => ({
  loading: false,
  success: false,
  error: null
});

const onLoadableInit = (): Loadable => ({
  loading: true,
  success: false,
  error: null
});

const onLoadableSuccess = (): Loadable => ({
  loading: false,
  success: true,
  error: null
});

const onLoadableError = (error: any): Loadable => ({
  loading: false,
  success: false,
  error: error
});

export const featureKey = 'activator-store';

const initialState = {
  step: 0,
  activatorsByCategoryData: [],
  activatorData: {} as Activator,
  activatorDataStatus: createDefaultLoadable() as Loadable
};
const innerReducer = createReducer(
  initialState,
  on(setActivatorsByCategoryData, (state, { activatorsByCategoryData }) => ({ ...state, activatorsByCategoryData })),
  on(setActivatorsCount, (state, { activatorsCount }) => ({ ...state, activatorsCount })),
  on(setCategoriesCount, (state, { categoriesCount }) => ({ ...state, categoriesCount })),
  on(setProgress, (state, { step }) => ({ ...state, step })),
  on(storeActivatorData, (state, { activatorData }) => ({ ...state, activatorData })),
  on(createActivatorByURL, state => ({ ...state, activatorDataStatus: onLoadableInit() })),
  on(createActivatorByURLSuccess, (state, { activatorData }) => ({
    ...state,
    activatorData,
    activatorDataStatus: onLoadableSuccess()
  })),
  on(createActivatorByURLError, (state, { error }) => ({ ...state, activatorDataStatus: onLoadableError(error) }))
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
