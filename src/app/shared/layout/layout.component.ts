import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin, selectUserInitials, selectShowWelcome } from '@app/login/login.reducer';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';
import { NotificationsService } from '../notifications/notifications.service';
import { NotificationData } from '../notifications/notifications.model';
import { notificationsReducer } from '../notifications/notifications.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isExpanded = true;
  userIsAdmin$: Observable<User>;
  showWelcome$: Observable<User>;
  userInitials$: Observable<User>;
  notifications$: Observable<NotificationData[]>; // name is notificationData because of already existing Notification interface
  // and this is custom for app notifications.

  constructor(
    private store: Store<any>,
    public dialog: MatDialog,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.userInitials$ = this.store.pipe(select(selectUserInitials));
    this.showWelcome$ = this.store.pipe(select(selectShowWelcome));
    this.showWelcome$.subscribe(showWelcome => {
      if (showWelcome) {
        setTimeout(() => {
          this.dialog
            .open(WelcomeComponent, { panelClass: 'custom-dialog-container' })
            .afterClosed()
            .subscribe(result => {
              console.log(`${result}`);
            });
        }, 400);
      }
    });
    this.updateNotificationsCount();
    // this.notificationsService.getNotificationData();
  }

  notificationCounter = 0;

  updateNotificationsCount() {
    this.notificationCounter = 10;
  }
}
