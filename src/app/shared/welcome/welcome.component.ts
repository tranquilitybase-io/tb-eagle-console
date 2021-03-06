import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { selectUserIsLZAdmin, selectUserName, selectUserTeams, selectUserId } from '@app/login/login.reducer';
import { updateShowWelcome } from '@app/login/login.actions';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  checkWelcome = false;
  userIsLZAdmin$: Observable<boolean>;
  selectUser$: Observable<string>;
  userTeams$: Observable<string[]>;
  userId: number;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.userIsLZAdmin$ = this.store.pipe(select(selectUserIsLZAdmin));
    this.selectUser$ = this.store.pipe(select(selectUserName));
    this.userTeams$ = this.store.pipe(select(selectUserTeams));
    this.store.pipe(select(selectUserId)).subscribe((userId) => (this.userId = userId));
  }

  setShowWelcome(showWelcome: boolean) {
    const userId = this.userId;
    this.store.dispatch(updateShowWelcome({ userId, showWelcome: showWelcome }));
  }
}
