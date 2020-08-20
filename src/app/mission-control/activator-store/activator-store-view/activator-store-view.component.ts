import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { MatDialog } from '@angular/material/dialog';
import { Activator } from '../activator-store.model';
import { ActivatedRoute } from '@angular/router';
import { setDeprecated, setLocked, requestAccess } from '@app/mission-control/activator-store/activator-store.actions';
import { ActivatorStoreDialogGrantAccessComponent } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog-grant-access/activator-store-dialog-grant-access.component';

@Component({
  selector: 'app-activator-store-view',
  templateUrl: './activator-store-view.component.html',
  styleUrls: ['./activator-store-view.component.scss']
})
export class ActivatorStoreViewComponent implements OnInit {
  activator: Activator;
  userIsAdmin$: Observable<boolean>;

  private teamList: KeyValue<string, string>[];

  constructor(private dialog: MatDialog, private store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit() {
    /*
    this.route.data.subscribe(data => {
      this.activator = data.activator as Activator;
    });
    */
    this.activator = this.route.snapshot.data['activator'] as Activator;
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.teamList = this.route.snapshot.data['teamList'];
  }

  get lastUpdated(): Date {
    return new Date(this.activator.lastUpdated || null);
  }

  get isAvailable(): boolean {
    return String(this.activator.status).toLowerCase() === 'available';
  }

  get isLocked(): boolean {
    return String(this.activator.status).toLowerCase() === 'locked';
  }

  get isDeprecated(): boolean {
    return String(this.activator.status).toLowerCase() === 'deprecated';
  }

  setDeprecated() {
    this.store.dispatch(setDeprecated({ id: this.activator.id }));
  }

  setLocked() {
    this.store.dispatch(setLocked({ id: this.activator.id }));
  }

  grantAccess() {
    this.dialog.open(ActivatorStoreDialogGrantAccessComponent, {
      autoFocus: false,
      data: {
        activatorId: this.activator.id,
        teamList: this.teamList,
        accessRequestedBy: this.activator.accessRequestedBy
      }
    });
  }

  requestAccess() {
    this.store.dispatch(requestAccess({ id: this.activator.id }));
  }
}
