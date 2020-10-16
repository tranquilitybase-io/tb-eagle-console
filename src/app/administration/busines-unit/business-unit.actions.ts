import { createAction, props } from '@ngrx/store';
import { BusinessUnit } from './business-unit.model';

const key = '[business unit]';

export const createBusinessUnit = createAction(`${key} createBusinessUnit`, props<{ businessUnit: BusinessUnit }>());
export const createBusinessUnitSuccess = createAction(`${key} createBusinessUnitSuccess`);
export const createBusinessUnitError = createAction(`${key} createBusinessUnitError`, props<{ error: any }>());

export const updateBusinessUnit = createAction(`${key} updateBusinessUnit`, props<{ businessUnit: BusinessUnit }>());
export const updateBusinessUnitSuccess = createAction(`${key} updateBusinessUnitSuccess`);
export const updateBusinessUnitError = createAction(`${key} updateBusinessUnitError`, props<{ error: any }>());
