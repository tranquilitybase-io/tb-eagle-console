import { NotificationData } from './notifications.model';
import { setNotificationData } from './notifications.actions';
import { on, createReducer, createSelector } from '@ngrx/store';

export const intialState = {
  notification: []
};

export interface NotificationState {
  notification: NotificationData[];
}
export const featureKey = 'notifications';
export const selectFeature = state => state[featureKey];

export const notificationsReducer = createReducer(
  intialState,
  on(setNotificationData, (state, { notification }) => ({ ...state, notification }))
);

export const selectNotificationData = createSelector(selectFeature, state =>
  state ? state.notification : ([] as NotificationData[])
);
