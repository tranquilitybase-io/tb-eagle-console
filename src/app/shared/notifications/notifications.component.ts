import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationData } from './notifications.model';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() notifications$: Observable<NotificationData[]>;
  notificationData: NotificationData[];
  constructor(private route: ActivatedRoute, notificationService: NotificationsService) {
    notificationService.getNotificationData();
  }

  ngOnInit() {}
}
