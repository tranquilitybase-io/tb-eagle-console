import { NotificationData } from './notifications.model';
import { setNotificationData } from './notifications.actions';
import { on, createReducer } from '@ngrx/store';

export const intialState = {
  notification: []
};

export interface NotificationState {
  notification: NotificationData[];
}
export const featureKey = 'notifications';

export const notificationsReducer = createReducer(
  intialState,
  on(setNotificationData, (state, { notification }) => ({ ...state, notification }))
);
