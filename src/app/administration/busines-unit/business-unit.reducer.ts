import { onLoadableInit, onLoadableSuccess, onLoadableError } from './../../shared/shared.reducer';
import { defaultLoadable, Loadable } from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';
import {
  getBusinessUnits,
  getBusinessUnitsSuccess,
  getBusinessUnitsError,
  createBusinessUnit,
  createBusinessUnitError,
  createBusinessUnitSuccess,
  updateBusinessUnit,
  updateBusinessUnitError,
  updateBusinessUnitSuccess
} from './business-unit.actions';
import { BusinessUnit } from './business-unit.model';

export const initialState = {
  businessUnits: [] as BusinessUnit[],
  getBusinessUnitsStatus: defaultLoadable() as Loadable,
  createBusinessUnitStatus: defaultLoadable() as Loadable,
  updateBusinessUnitsStatus: defaultLoadable() as Loadable
};

export interface BussinesUnitState {
  businessUnits: BusinessUnit[];
  getBusinessUnitsStatus: Loadable;
  createBusinessUnitStatus: Loadable;
  updateBusinessUnitsStatus: Loadable;
}
export const featureKey = 'business-unit';

export const usersReducer = createReducer(
  initialState,
  //getAll
  on(getBusinessUnits, state => ({ ...state, getBusinessUnitsStatus: onLoadableInit() })),
  on(getBusinessUnitsSuccess, (state, { businessUnits }) => ({
    ...state,
    businessUnits,
    getBusinessUnitsStatus: onLoadableSuccess()
  })),
  on(getBusinessUnitsError, (state, { error }) => ({ ...state, getBusinessUnitsStatus: onLoadableError(error) })),
  //create
  on(createBusinessUnit, state => ({ ...state, createBusinessUnitStatus: onLoadableInit() })),
  on(createBusinessUnitSuccess, state => ({ ...state, createBusinessUnitStatus: onLoadableSuccess() })),
  on(createBusinessUnitError, (state, { error }) => ({ ...state, createBusinessUnitStatus: onLoadableError(error) })),
  //update
  on(updateBusinessUnit, state => ({ ...state, updateBusinessUnitsStatus: onLoadableInit() })),
  on(updateBusinessUnitSuccess, state => ({ ...state, updateBusinessUnitsStatus: onLoadableSuccess() })),
  on(updateBusinessUnitError, (state, { error }) => ({ ...state, updateBusinessUnitsStatus: onLoadableError(error) }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey] as BussinesUnitState;
export const selectBusinessUnits = createSelector(selectFeature, state => state && state.businessUnits);
export const selectGetBusinessUnitsStatus = createSelector(
  selectFeature,
  state => state && state.getBusinessUnitsStatus
);
export const selectCreateBusinessUnitsStatus = createSelector(
  selectFeature,
  state => state && state.createBusinessUnitStatus
);
export const selectUpdateBusinessUnitsStatus = createSelector(
  selectFeature,
  state => state && state.updateBusinessUnitsStatus
);
