import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationMetaData } from '../notifications/notifications.model';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({ providedIn: 'root' })
export class NotificationMetaResolver implements Resolve<NotificationMetaData[]> {
  constructor(private notificationsService: NotificationsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NotificationMetaData[]> {
    return this.notificationsService.getNotificationMetaData();
  }
}
