import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin } from '@app/login/login.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isExpanded = false;
  userIsAdmin$: Observable<User>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
  }
}
