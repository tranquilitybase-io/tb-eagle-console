import { createReducer, on, createSelector } from '@ngrx/store';
import { getBusinessUnitList, getBusinessUnitListSuccess, getBussinessUnitListError } from './business-unit.actions';
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
  on(getBussinessUnitListError, (state, { error }) => ({ ...state }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectBusinessUnitList = createSelector(selectFeature, state => state && state.businessUnitList);
