import { createReducer, on, createSelector } from '@ngrx/store';
import {
  createBusinessUnit,
  createBusinessUnitError,
  createBusinessUnitSuccess,
  updateBusinessUnit,
  updateBusinessUnitError,
  updateBusinessUnitSuccess
} from './business-unit.actions';
import { BusinessUnit } from './business-unit.model';

export const initialState = {
  businessUnitList: [] as BusinessUnit[]
};

export interface BussinesUnitState {
  businessUnitList: BusinessUnit[];
}
export const featureKey = 'business-unit';

export const usersReducer = createReducer(
  initialState,
  // add handling  status after merging error & success branch
  on(createBusinessUnit, state => ({ ...state })),
  on(createBusinessUnitError, (state, { error }) => ({ ...state })),
  on(createBusinessUnitSuccess, state => ({ ...state })),
  on(updateBusinessUnit, state => ({ ...state })),
  on(updateBusinessUnitError, (state, { error }) => ({ ...state })),
  on(updateBusinessUnitSuccess, state => ({ ...state }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectBusinessUnitList = createSelector(selectFeature, state => state && state.businessUnitList);
