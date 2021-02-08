import { createAction, props } from '@ngrx/store';
import { QueryParam } from './business-unit-home/business-unit-home-filter/business-unit-home-filter.model';
import { BusinessUnit } from './business-unit.model';

const key = '[business unit]';

export const getBusinessUnits = createAction(`${key} getBusinessUnits`, props<{ queryParams: QueryParam[] }>());
export const getBusinessUnitsSuccess = createAction(
  `${key} getBusinessUnitsSuccess`,
  props<{ businessUnits: BusinessUnit[] }>()
);
export const getBusinessUnitsError = createAction(`${key} getBusinessUnitsError`, props<{ error: any }>());

export const createBusinessUnit = createAction(`${key} createBusinessUnit`, props<{ businessUnit: BusinessUnit }>());
export const createBusinessUnitSuccess = createAction(`${key} createBusinessUnitSuccess`);
export const createBusinessUnitError = createAction(`${key} createBusinessUnitError`, props<{ error: any }>());
export const resetCreateBusinessUnitStatus = createAction(`${key} resetCreateBusinessUnitStatus`);

export const updateBusinessUnit = createAction(`${key} updateBusinessUnit`, props<{ businessUnit: BusinessUnit }>());
export const updateBusinessUnitSuccess = createAction(`${key} updateBusinessUnitSuccess`);
export const updateBusinessUnitError = createAction(`${key} updateBusinessUnitError`, props<{ error: any }>());
export const resetUpdateBusinessUnitStatus = createAction(`${key} resetUpdateBusinessUnitStatus`);
