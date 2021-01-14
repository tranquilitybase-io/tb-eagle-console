import { createAction, props } from '@ngrx/store';
import { SharedServicesProgressItem } from './shared-services.model';

export const getSharedServicesProgressItems = createAction(
  '[shared-services-environment] getSharedServicesProgressItems'
);
export const getSharedServicesProgressItemsError = createAction(
  '[shared-services-environment] getSharedServicesProgressItemsError',
  props<{ error: any }>()
);
export const getSharedServicesProgressItemsSuccess = createAction(
  '[shared-services-environment] getSharedServicesProgressItemsSuccess',
  props<{ sharedServicesProgressItems: SharedServicesProgressItem[] }>()
);
