import { Notification, NotificationsMeta } from './notifications.model';
import { createAction, props } from '@ngrx/store';

export const setNotificationsData = createAction(
  '[notifications] setNotificationsData',
  props<{ notificationsData: Notification[] }>()
);

export const setNotificationsMetaData = createAction(
  '[notifications] setNotificationsMetaData',
  props<{ notificationsMetaData: NotificationsMeta }>()
);
