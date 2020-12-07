import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KeyValue } from '@angular/common';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { selectIsSelectedSolution, selectSelectedSolution } from '@app/mission-control/solutions/solutions.reducer';
import { selectActivatorData } from '../activator-store.reducer';
import {
  requestAccess,
  resetAPICallStatuses,
  setDeprecated,
  setLocked,
  storeActivatorData
} from '@app/mission-control/activator-store/activator-store.actions';
import { ActivatorStoreDialogGrantAccessComponent } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog-grant-access/activator-store-dialog-grant-access.component';
import { ActivatorStoreDialogCreateOnboardingComponent } from './../activator-store-dialog/activator-store-dialog-create-onboarding/activator-store-dialog-create-onboarding.component';
import { ActivatorStoreService } from '../activator-store.service';
import { Activator } from '../activator-store.model';
import { Solution } from '@app/mission-control/solutions/solutions.model';

@Component({
  selector: 'app-activator-store-view',
  templateUrl: './activator-store-view.component.html',
  styleUrls: ['./activator-store-view.component.scss']
})
export class ActivatorStoreViewComponent implements OnInit {
  activator: Activator = {} as Activator;
  activator$: Observable<Activator>;
  userIsAdmin$: Observable<boolean>;
  private teamList: KeyValue<string, string>[];

  isSelectedSolution$: Observable<boolean>;
  selectedSolution$: Observable<Solution>;
  selectedActivatorName: string;

  constructor(
    private dialog: MatDialog,
    private store: Store<any>,
    private route: ActivatedRoute,
    private activatorStoreService: ActivatorStoreService
  ) {
    this.activator$ = this.store.pipe(select(selectActivatorData));
  }

  ngOnInit() {
    this.store.dispatch(resetAPICallStatuses());
    this.activator = this.route.snapshot.data['activator'] as Activator;
    this.store.dispatch(storeActivatorData({ activatorData: this.activator }));
    this.activator$.subscribe(activatorData => {
      this.activator = activatorData;
      this.selectedActivatorName = this.activator.name;
    });

    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.isSelectedSolution$ = this.store.pipe(select(selectIsSelectedSolution));
    this.selectedSolution$ = this.store.pipe(select(selectSelectedSolution));
    this.teamList = this.route.snapshot.data['teamList'];

    this.route.queryParams
      .pipe(
        switchMap(params => {
          return this.activatorStoreService.getByKey(params['id']);
        })
      )
      .subscribe(activator => {
        this.store.dispatch(storeActivatorData({ activatorData: activator }));
      });
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

  get isDraft(): boolean {
    return this.activator && String(this.activator.status).toLowerCase() === 'draft';
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

  onboard() {
    this.dialog.open(ActivatorStoreDialogCreateOnboardingComponent, {
      autoFocus: false,
      data: {
        activator: this.activator,
        redirect: false
      }
    });
  }
}
