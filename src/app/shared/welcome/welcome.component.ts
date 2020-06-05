import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin, selectUserName, selectShowWelcome, selectUserTeams } from '@app/login/login.reducer';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userIsAdmin$: Observable<User>;
  selectUser$: Observable<User>;
  showWelcome$: Observable<User>;
  userTeams$: Observable<User>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.showWelcome$ = this.store.pipe(select(selectShowWelcome));
    this.selectUser$ = this.store.pipe(select(selectUserName));
    this.userTeams$ = this.store.pipe(select(selectUserTeams));
  }
}
