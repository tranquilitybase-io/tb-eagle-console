import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin, selectShowWelcome, selectUserInitials } from '@app/login/login.reducer';
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
  showWelcome$: Observable<User>;
  userInitials$: Observable<User>;

  constructor(private store: Store<any>, public dialog: MatDialog) {
    if (!this.showWelcome$) {
      setTimeout(() => {
        this.dialog
          .open(WelcomeComponent, { panelClass: 'custom-dialog-container' })
          .afterClosed()
          .subscribe(result => {
            console.log(`Start button clicked: ${result}`);
          });
      }, 400);
    }
  }

  ngOnInit() {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.userInitials$ = this.store.pipe(select(selectUserInitials));
  }
}
