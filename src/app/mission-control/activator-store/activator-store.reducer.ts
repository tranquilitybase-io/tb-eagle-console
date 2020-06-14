import { createReducer, createSelector, on } from '@ngrx/store';

import {
  setProgress,
  setCategoriesCount,
  setActivatorsCount,
  setActivatorsByCategoryData
} from './activator-store.actions';
import { Activator } from './activator-store.model';

export const featureKey = 'activator-store';

const initialState = { step: 0, activatorsByCategoryData: [] };
const innerReducer = createReducer(
  initialState,
  on(setActivatorsByCategoryData, (state, { activatorsByCategoryData }) => ({ ...state, activatorsByCategoryData })),
  on(setActivatorsCount, (state, { activatorsCount }) => ({ ...state, activatorsCount })),
  on(setCategoriesCount, (state, { categoriesCount }) => ({ ...state, categoriesCount })),
  on(setProgress, (state, { step }) => ({ ...state, step }))
);

export const reducer = (state, action) => {
  return innerReducer(state, action);
};

export const selectFeature = state => state[featureKey];
export const selectProgress = createSelector(selectFeature, ({ step }) => step);
export const selectCategoriesCount = createSelector(selectFeature, ({ categoriesCount }) => categoriesCount);
export const selectActivatorsCount = createSelector(selectFeature, ({ activatorsCount }) => activatorsCount);
export const selectActivatorsByCategoryData = createSelector(selectFeature, state =>
  state ? state.activatorsByCategoryData : ([] as Activator[])
);
