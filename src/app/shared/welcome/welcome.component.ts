import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin, selectIsAuthenticated } from '@app/login/login.reducer';

@Component({
  selector: 'welcome-dialog',
  templateUrl: 'welcome-dialog.component.html',
  styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent {}

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html'
})
export class WelcomeDialog implements OnInit {
  userIsAdmin$: Observable<User>;

  constructor(public dialog: MatDialog, private store: Store<any>) {}

  openDialog() {
    const dialogRef = this.dialog.open(WelcomeComponent, { panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    if (this.userIsAdmin$) {
      console.log(`check result: /json, stringify/ ${this.userIsAdmin$}`);
    }
  }
}
