import { onLoadableInit, onLoadableSuccess, onLoadableError } from './../../shared/shared.reducer';
import { defaultLoadable, Loadable } from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';
import {
  createBusinessUnit,
  createBusinessUnitError,
  createBusinessUnitSuccess,
  resetCreateBusinessUnitStatus,
  getBusinessUnits,
  getBusinessUnitsError,
  getBusinessUnitsSuccess,
  updateBusinessUnit,
  updateBusinessUnitError,
  updateBusinessUnitSuccess,
  resetUpdateBusinessUnitStatus,
} from './business-unit.actions';
import { BusinessUnit } from './business-unit.model';

export const initialState = {
  businessUnits: [] as BusinessUnit[],
  createBusinessUnitStatus: defaultLoadable() as Loadable,
  getBusinessUnitsStatus: defaultLoadable() as Loadable,
  updateBusinessUnitsStatus: defaultLoadable() as Loadable,
};

export interface BussinesUnitState {
  businessUnits: BusinessUnit[];
  createBusinessUnitStatus: Loadable;
  getBusinessUnitsStatus: Loadable;
  updateBusinessUnitsStatus: Loadable;
}
export const featureKey = 'business-unit';

export const usersReducer = createReducer(
  initialState,
  //getAll
  on(getBusinessUnits, (state) => ({ ...state, getBusinessUnitsStatus: onLoadableInit() })),
  on(getBusinessUnitsError, (state, { error }) => ({ ...state, getBusinessUnitsStatus: onLoadableError(error) })),
  on(getBusinessUnitsSuccess, (state, { businessUnits }) => ({
    ...state,
    businessUnits,
    getBusinessUnitsStatus: onLoadableSuccess(),
  })),
  //create
  on(createBusinessUnit, (state) => ({ ...state, createBusinessUnitStatus: onLoadableInit() })),
  on(createBusinessUnitError, (state, { error }) => ({ ...state, createBusinessUnitStatus: onLoadableError(error) })),
  on(createBusinessUnitSuccess, (state) => ({ ...state, createBusinessUnitStatus: onLoadableSuccess() })),
  on(resetCreateBusinessUnitStatus, (state) => ({ ...state, createBusinessUnitStatus: defaultLoadable() })),
  //update
  on(updateBusinessUnit, (state) => ({ ...state, updateBusinessUnitsStatus: onLoadableInit() })),
  on(updateBusinessUnitError, (state, { error }) => ({ ...state, updateBusinessUnitsStatus: onLoadableError(error) })),
  on(updateBusinessUnitSuccess, (state) => ({ ...state, updateBusinessUnitsStatus: onLoadableSuccess() })),
  on(resetUpdateBusinessUnitStatus, (state) => ({ ...state, updateBusinessUnitsStatus: defaultLoadable() }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = (state) => state[featureKey] as BussinesUnitState;
export const selectBusinessUnits = createSelector(selectFeature, (state) => state && state.businessUnits);
export const selectCreateBusinessUnitsStatus = createSelector(
  selectFeature,
  (state) => state && state.createBusinessUnitStatus
);
export const selectGetBusinessUnitsStatus = createSelector(
  selectFeature,
  (state) => state && state.getBusinessUnitsStatus
);
export const selectUpdateBusinessUnitsStatus = createSelector(
  selectFeature,
  (state) => state && state.updateBusinessUnitsStatus
);
