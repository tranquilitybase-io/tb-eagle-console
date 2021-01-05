import { createAction, props } from '@ngrx/store';
import { SharedServicesItem } from './shared-service.model';

export const getSharedServicesItems = createAction('[shared-services] getSharedServicesItems');
export const getSharedServicesItemsError = createAction(
  '[shared-services] getSharedServicesItemsError',
  props<{ error: any }>()
);
export const getSharedServicesItemsSuccess = createAction(
  '[shared-services] getSharedServicesItemsSuccess',
  props<{ sharedServicesItems: SharedServicesItem[] }>()
);
