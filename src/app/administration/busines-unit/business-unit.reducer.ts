import { createReducer, on, createSelector } from '@ngrx/store';
import {
  getBusinessUnitList,
  getBusinessUnitListSuccess,
  getBussinessUnitListError,
  createBusinessUnit,
  createBusinessUnitSuccess,
  createBusinessUnitError,
  updateBusinessUnit,
  updateBusinessUnitSuccess,
  updateBusinessUnitError
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
  on(getBusinessUnitList, state => ({ ...state })),
  on(getBusinessUnitListSuccess, (state, { businessUnitList }) => ({ ...state, businessUnitList })),
  on(getBussinessUnitListError, (state, { error }) => ({ ...state })),
  on(createBusinessUnit, state => ({ ...state })),
  on(createBusinessUnitSuccess, state => ({ ...state })),
  on(createBusinessUnitError, (state, { error }) => ({ ...state })),
  on(updateBusinessUnit, state => ({ ...state })),
  on(updateBusinessUnitSuccess, state => ({ ...state })),
  on(updateBusinessUnitError, (state, { error }) => ({ ...state }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectBusinessUnitList = createSelector(selectFeature, state => state && state.businessUnitList);
