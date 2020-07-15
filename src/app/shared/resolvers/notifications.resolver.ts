import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationData } from '../notifications/notifications.model';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({ providedIn: 'root' })
export class NotificationResolver implements Resolve<NotificationData[]> {
  constructor(private notificationsService: NotificationsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NotificationData[]> {
    return this.notificationsService.getNotificationData();
  }
}
