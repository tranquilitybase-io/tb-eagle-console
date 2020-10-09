import { createAction, props } from '@ngrx/store';
import { BusinessUnit } from './business-unit.model';

const key = '[business unit]';

export const getBusinessUnitList = createAction(`${key} getBusinessUnitList`);
export const getBusinessUnitListSuccess = createAction(
  `${key} getBussinessUnitListSuccess`,
  props<{ businessUnitList: BusinessUnit[] }>()
);
export const getBussinessUnitListError = createAction(`${key} getBussinessUnitListError`, props<{ error: any }>());
