import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin, selectIsAuthenticated } from '@app/login/login.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userIsAdmin$: Observable<User>;
  isAuthenticated$: Observable<any>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
