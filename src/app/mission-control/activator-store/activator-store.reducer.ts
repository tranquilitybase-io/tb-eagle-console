import { createReducer, createSelector, on } from '@ngrx/store';

import { setProgress, setCategoriesCount, setActivatorsCount } from './activator-store.actions';

export const featureKey = 'activator-store';

const initialState = { step: 0 };
const innerReducer = createReducer(
  initialState,
  on(setProgress, (state, { step }) => ({ ...state, step })),
  on(setCategoriesCount, (state, { categoriesCount }) => ({ ...state, categoriesCount })),
  on(setActivatorsCount, (state, { activatorsCount }) => ({ ...state, activatorsCount }))
);

export default function reducer(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectProgress = createSelector(selectFeature, ({ step }) => step);
export const selectCategoriesCount = createSelector(selectFeature, ({ categoriesCount }) => categoriesCount);
export const selectActivatorsCount = createSelector(selectFeature, ({ activatorsCount }) => activatorsCount);
