import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin, selectUserInitials, selectShowWelcome } from '@app/login/login.reducer';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';
import { NotificationsService } from '../notifications/notifications.service';
import { Notification, NotificationsMeta } from '../notifications/notifications.model';
import { selectNotificationMetaData, selectNotificationData } from '../notifications/notifications.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isExpanded = true;
  notificationMetaData$: Observable<NotificationsMeta>;
  notifications$: Observable<Notification[]>;
  showWelcome$: Observable<boolean>;
  userInitials$: Observable<string>;
  userIsAdmin$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    public dialog: MatDialog,
    private router: Router,
    private notificationService: NotificationsService
  ) {}

  ngOnInit() {
    this.notificationService.pollingInitAll();
    this.notificationMetaData$ = this.store.pipe(select(selectNotificationMetaData));
    this.notifications$ = this.store.pipe(select(selectNotificationData));
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
  }

  logout() {
    if (globalThis.gapi && globalThis.gapi.auth2) {
      globalThis.gapi.auth2.getAuthInstance().signOut();
    }
    localStorage.clear();
    this.notificationService.pollingKillAll();
    setTimeout(() => this.router.navigateByUrl('/login'), 200);
  }

  isLinkActive(url: string): boolean {
    return this.router.url.includes(url);
  }
}
