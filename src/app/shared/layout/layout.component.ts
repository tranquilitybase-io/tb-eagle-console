import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin, selectUserName } from '@app/login/login.reducer';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isExpanded = true;
  userIsAdmin$: Observable<User>;
  selectUser$: Observable<User>;

  constructor(private store: Store<any>, public dialog: MatDialog) {
    setTimeout(() => {
      this.dialog.open(WelcomeComponent, { panelClass: 'custom-dialog-container' });
    }, 400);
  }

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.selectUser$ = this.store.pipe(select(selectUserName));
  }
}
