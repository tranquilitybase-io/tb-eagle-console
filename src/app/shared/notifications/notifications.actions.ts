import { NotificationData, NotificationMetaData } from './notifications.model';
import { createAction, props } from '@ngrx/store';

export const setNotificationData = createAction(
  '[notifications] notificationData',
  props<{ notification: NotificationData[] }>()
);

export const setNotificationMetaData = createAction(
  '[notifications] notificationMetaData',
  props<{ notificationCount: NotificationMetaData[] }>()
);
