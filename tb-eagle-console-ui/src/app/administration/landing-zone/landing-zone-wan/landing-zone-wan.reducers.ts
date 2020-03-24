import { createReducer, on, createSelector, select, createFeatureSelector } from '@ngrx/store';

import { WanConfiguration } from './landing-zone-wan.model';

export const intialState = {
  wanConfiguration: [{}]
};

export interface SolutionsState {
  wanConfiguration: WanConfiguration[];
}
export const featureKey = 'landing-zone-wan';

export const landingZoneWanReducer = createReducer(intialState);

export default function reducer(state, action) {
  return landingZoneWanReducer(state, action);
}

export const selectFeature = state => state[featureKey];
