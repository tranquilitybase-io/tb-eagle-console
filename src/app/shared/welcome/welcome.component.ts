import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin } from '@app/login/login.reducer';

@Component({
  selector: 'welcome-dialog',
  templateUrl: 'welcome-dialog.component.html',
  styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userIsAdmin$: Observable<User>;
  constructor(private store: Store<any>) {}
  firstName$: Observable<User>;

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
  }
}

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html'
})
export class WelcomeDialog {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(WelcomeComponent, { panelClass: 'custom-dialog-container' });
  }
}
