import { NotificationData, NotificationMetaData } from './notifications.model';
import { setNotificationData, setNotificationMetaData } from './notifications.actions';
import { on, createReducer, createSelector } from '@ngrx/store';

export const intialState = {
  notification: [],
  notificationCount: []
};

export interface NotificationState {
  notification: NotificationData[];
  notificationCount: NotificationMetaData[];
}
export const featureKey = 'notifications';
export const selectFeature = state => state[featureKey];

export const notificationsReducer = createReducer(
  intialState,
  on(setNotificationData, (state, { notification }) => ({ ...state, notification })),
  on(setNotificationMetaData, (state, { notificationCount }) => ({ ...state, notificationCount }))
);

export const selectNotificationData = createSelector(selectFeature, state =>
  state ? state.notification : ([] as NotificationData[])
);

export const selectNotificationMetaData = createSelector(selectFeature, state =>
  state ? state.notificationCount : ([] as NotificationMetaData[])
);
