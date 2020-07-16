import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationData, NotificationMetaData } from './notifications.model';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from './notifications.service';
import { selectNotificationData, NotificationState } from './notifications.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() notifications$: Observable<NotificationData[]>;
  notificationData: NotificationData[];
  notificationMetaData: NotificationMetaData[];

  constructor(
    private route: ActivatedRoute,
    notificationService: NotificationsService,
    private store: Store<NotificationState>
  ) {
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
