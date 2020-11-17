import { Component, OnInit } from '@angular/core';
import { Notification, NotificationsMeta, NotificationType, NotificationTypeId } from './notifications.model';
import { selectNotificationData, NotificationState } from './notifications.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notificationData: Notification[];
  notificationMetaData: NotificationsMeta;

  constructor(private store: Store<NotificationState>) {
    this.store.pipe(select(selectNotificationData)).subscribe(notificationData => {
      this.setNotifications(notificationData);
    });
  }

  ngOnInit() {}

  setNotifications(notificationData) {
    const parsedData = notificationData.map(notification => this.parseNotification(notification));
    this.notificationData = parsedData;
  }

  parseNotification(notificationData: Notification) {
    switch (notificationData.typeId) {
      case NotificationTypeId[NotificationType.Activator]:
        return { ...notificationData, link: this.createActivatorLink(notificationData.details.activatorId) };
      case NotificationTypeId[NotificationType.Team]:
        return { ...notificationData };
      case NotificationTypeId[NotificationType.Application]:
        return { ...notificationData };
      case NotificationTypeId[NotificationType.Solution]:
        return { ...notificationData, link: this.createSolutionLink(notificationData.details.solutionId) };
    }
  }

  createActivatorLink(activatorId: number) {
    return {
      routerLink: `/mission-control/activator-store/view`,
      id: activatorId
    };
  }

  createSolutionLink(solutionId: number) {
    return {
      routerLink: `/mission-control/solutions/view`,
      id: solutionId
    };
  }
}
