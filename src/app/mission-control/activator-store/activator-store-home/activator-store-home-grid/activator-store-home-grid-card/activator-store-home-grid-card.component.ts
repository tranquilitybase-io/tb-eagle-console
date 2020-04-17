import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Activator } from '@app/mission-control/activator-store/activator-store.model';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { KeyValue } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { selectUserIsAdmin } from '@app/login/login.reducer';

import { setDeprecated, setLocked, requestAccess } from '@app/mission-control/activator-store/activator-store.actions';

import { ActivatorStoreDialogGrantAccessComponent } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog-grant-access/activator-store-dialog-grant-access.component';

@Component({
  selector: 'app-activator-store-home-grid-card',
  templateUrl: './activator-store-home-grid-card.component.html',
  styleUrls: ['./activator-store-home-grid-card.component.scss']
})
export class ActivatorStoreHomeGridCardComponent implements OnInit {
  @Input() activator: Activator;
  active = false;
  userIsAdmin$: Observable<User>;

  private statusColorMap: Map<string, string>;
  private teamList: KeyValue<string, string>[];

  constructor(private store: Store<any>, private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit() {
    this.statusColorMap = new Map([
      ['available', 'accent'],
      ['deprecated', 'warn']
    ]);
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.teamList = this.route.snapshot.data['teamList'];
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

  get sensitivityColor(): string {
    return String(this.activator.sensitivity).toLowerCase() === 'restricted' ? 'warn' : '';
  }

  get statusColor(): string {
    return this.statusColorMap.get(String(this.activator.status).toLowerCase());
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
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

  get lastUpdated(): Date {
    return new Date(this.activator.lastUpdated || null);
  }
}
