export interface NotificationDetails {
  activatorId?: number;
  solutionId?: number;
  isActive: boolean;
  lastUpdated: string;
  notificationId: number;
}

export interface NotificationRouting {
  routerLink: string;
  id: number;
}

export interface Notification {
  details: NotificationDetails;
  activatorId: number;
  fromUserId: number;
  id: number;
  importance: number;
  isActive: boolean;
  isRead: boolean;
  message: string;
  toUserId: number;
  typeId: number;
  link?: NotificationRouting;
}

export interface NotificationsMeta {
  count: number;
}

export enum NotificationType {
  Activator = 'ACTIVATOR',
  Team = 'TEAM',
  Application = 'APPLICATION',
  Solution = 'SOLUTION'
}

export const NotificationTypeId = {
  [NotificationType.Activator]: 1,
  [NotificationType.Team]: 2,
  [NotificationType.Application]: 3,
  [NotificationType.Solution]: 4
};
