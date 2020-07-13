import { NotificationData } from './notifications.model';
import { createAction, props } from '@ngrx/store';

export const setNotificationData = createAction(
  '[notifications] notificationData',
  props<{ notification: NotificationData[] }>()
);
