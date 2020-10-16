import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { setProgress } from '../activator-store.actions';
import { map } from 'rxjs/operators';
import { selectCategoriesCount, selectActivatorsCount } from '../activator-store.reducer';

import { selectProgress } from '../activator-store.reducer';
import { selectIsSelectedSolution, selectSelectedSolution } from '../../solutions/solutions.reducer';
import { discardSelectedSolution } from '../../solutions/solutions.actions';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchModel,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { ActivatorStoreDialogCreateComponent } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog-create/activator-store-dialog-create.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { resetAPICallStatuses } from './../activator-store.actions';
import {
  selectDenyAccessStatus,
  selectGrantAccessStatus,
  selectRequestAccessStatus,
  selectSetDeprecatedStatus,
  selectSetLockedStatus
} from './../activator-store.reducer';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';

@Component({
  selector: 'app-activator-store-home',
  templateUrl: './activator-store-home.component.html',
  styleUrls: ['./activator-store-home.component.scss']
})
export class ActivatorStoreHomeComponent implements OnInit {
  categorySwitch$: Observable<string>;
  categoriesCount$: Observable<number>;
  activatorsCount$: Observable<number>;

  categories = ['Web applications'];

  progress$: Observable<number>;
  isSelectedSolution$: Observable<boolean>;
  selectedSolution$: Observable<Solution>;

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.activatorStore;
  currentGridViewOption$: Observable<GridViewSwitchModel>;

  userIsAdmin$: Observable<boolean>;

  denyAccessStatus$: Observable<Loadable>;
  grantAccessStatus$: Observable<Loadable>;
  requestAccessStatus$: Observable<Loadable>;
  setDeprecatedStatus$: Observable<Loadable>;
  setLockedStatus$: Observable<Loadable>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.resetAPIStatuses();
    this.store.dispatch(setProgress({ step: 0 }));
    this.categorySwitch$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));

    this.onSwitch(this.route.snapshot.queryParams.categorySwitch || 'Category');

    this.categoriesCount$ = this.store.pipe(select(selectCategoriesCount));
    this.activatorsCount$ = this.store.pipe(select(selectActivatorsCount));

    this.progress$ = this.store.pipe(select(selectProgress));
    this.isSelectedSolution$ = this.store.pipe(select(selectIsSelectedSolution));
    this.selectedSolution$ = this.store.pipe(select(selectSelectedSolution));
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions, this.gridViewOptionsName));
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));

    this.setDeprecatedStatus$ = this.store.pipe(select(selectSetDeprecatedStatus));
    this.setDeprecatedStatus$.subscribe(status => {
      this.handleSetDeprecatedStatus(status);
    });
    this.setLockedStatus$ = this.store.pipe(select(selectSetLockedStatus));
    this.setLockedStatus$.subscribe(status => {
      this.handleSetLockedStatus(status);
    });
    this.denyAccessStatus$ = this.store.pipe(select(selectDenyAccessStatus));
    this.denyAccessStatus$.subscribe(status => {
      this.handleDenyAccessStatus(status);
    });
    this.grantAccessStatus$ = this.store.pipe(select(selectGrantAccessStatus));
    this.grantAccessStatus$.subscribe(status => {
      this.hangleGrantAccessStatus(status);
    });
    this.requestAccessStatus$ = this.store.pipe(select(selectRequestAccessStatus));
    this.requestAccessStatus$.subscribe(status => {
      this.hangleRequestAccessStatus(status);
    });
  }

  resetAPIStatuses() {
    this.store.dispatch(resetAPICallStatuses());
  }

  //#status-handlers
  private handleSetDeprecatedStatus(status: Loadable) {
    console.log(status);
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Activator has been deprecated', success: true },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
    if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. Activator has not been deprecated', success: false },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
  }

  private handleSetLockedStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Activator has been locked', success: true },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
    if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. Activator has not been locked', success: false },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
  }

  private handleDenyAccessStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Access has been denyed', success: true },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
    if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong.Access has not been denyed', success: false },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
  }

  private hangleGrantAccessStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Access has been granted', success: true },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
    if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong.Access has not been granted', success: false },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
  }

  private hangleRequestAccessStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Access has been requested', success: true },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
    if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong.Access has not been requested', success: false },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
  }

  private hangleUpdateActivatorStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Access has been requested', success: true },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
    if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong.Access has not been requested', success: false },
        duration: 3500
      });
      this.resetAPIStatuses();
    }
  }
  //#end

  onSwitch(categorySwitch: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: { categorySwitch }
    });
  }

  cancel() {
    this.store.dispatch(discardSelectedSolution());
    this.router.navigateByUrl('/mission-control/solutions');
  }

  createNewActivator() {
    this.dialog.open(ActivatorStoreDialogCreateComponent, {
      autoFocus: false
    });
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption.option === GridViewSwitchOptionsEnum.grid)
    );
  }

  get isCategorySwitchSelected$(): Observable<boolean> {
    return this.categorySwitch$.pipe(map(categorySwitch => categorySwitch === 'Category'));
  }

  get isAllSwitchSelected$(): Observable<boolean> {
    return this.categorySwitch$.pipe(map(categorySwitch => categorySwitch === 'All'));
  }
}
