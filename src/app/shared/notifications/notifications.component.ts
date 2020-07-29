import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification, NotificationsMeta } from './notifications.model';
import { selectNotificationData, NotificationState } from './notifications.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() notifications$: Observable<Notification[]>;
  notificationData: Notification[];
  notificationMetaData: NotificationsMeta;

  constructor(private store: Store<NotificationState>) {
    this.store.pipe(select(selectNotificationData)).subscribe(notificationData => {
      this.notificationData = notificationData;
      this.setNotifications();
    });
  }

  ngOnInit() {}

  setNotifications() {
    this.notificationData = [...this.notificationData];
  }
}
