import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationData } from './notifications.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() notifications$: Observable<NotificationData[]>;

  constructor() {}

  ngOnInit() {}
}
