import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { selectUserIsAdmin, selectUserName, selectUserTeams, selectUserId } from '@app/login/login.reducer';
import { updateShowWelcome } from '@app/login/login.actions';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  checkWelcome = false;
  userIsAdmin$: Observable<User>;
  selectUser$: Observable<User>;
  showWelcome$: Observable<User>;
  userTeams$: Observable<User>;
  userId: number;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.selectUser$ = this.store.pipe(select(selectUserName));
    this.userTeams$ = this.store.pipe(select(selectUserTeams));
    this.store.pipe(select(selectUserId)).subscribe(userId => (this.userId = userId));
  }

  setShowWelcome(showWelcome: boolean) {
    const userId = this.userId;
    this.store.dispatch(updateShowWelcome({ userId, showWelcome: showWelcome }));
  }
}
