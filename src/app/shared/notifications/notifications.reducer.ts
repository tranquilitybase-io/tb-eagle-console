import { Notification, NotificationsMeta } from './notifications.model';
import { setNotificationsData, setNotificationsMetaData } from './notifications.actions';
import { on, createReducer, createSelector } from '@ngrx/store';

export const intialState = {
  notificationsData: [],
  notificationsMetaData: { count: 0 }
};

export interface NotificationState {
  notificationsData: Notification[];
  notificationsMetaData: NotificationsMeta;
}
export const featureKey = 'notifications';
export const selectFeature = state => state[featureKey];

export const notificationsReducer = createReducer(
  intialState,
  on(setNotificationsData, (state, { notificationsData }) => ({ ...state, notificationsData })),
  on(setNotificationsMetaData, (state, { notificationsMetaData }) => ({ ...state, notificationsMetaData }))
);

export const selectNotificationData = createSelector(selectFeature, state =>
  state ? state.notificationsData : ([] as Notification[])
);

export const selectNotificationMetaData = createSelector(selectFeature, state =>
  state ? state.setNotificationsMetaData : ({} as NotificationsMeta)
);
