import { createAction, props } from '@ngrx/store';
import { SharedServicesAction } from '../shared-services.model';

const key = '[Landing-Zone-Home]';

export const getSharedServicesActions = createAction(`${key} getSharedServicesActions`);
export const getSharedServicesActionsSuccess = createAction(
  `${key} getSharedServicesActionsSuccess`,
  props<{ sharedServicesActions: SharedServicesAction[] }>()
);
export const getSharedServicesActionsError = createAction(
  `${key} getSharedServicesActionsError`,
  props<{ error: any }>()
);
