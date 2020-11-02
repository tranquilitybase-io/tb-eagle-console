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
import { MatDialog } from '@angular/material';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { resetAPICallStatuses } from './../activator-store.actions';

@Component({
  selector: 'app-activator-store-home',
  templateUrl: './activator-store-home.component.html',
  styleUrls: ['./activator-store-home.component.scss']
})
export class ActivatorStoreHomeComponent implements OnInit {
  categorySwitch$: Observable<string>;
  categoriesCount$: Observable<number> = this.store.pipe(select(selectCategoriesCount));
  activatorsCount$: Observable<number> = this.store.pipe(select(selectActivatorsCount));

  categories = ['Web applications'];

  progress$: Observable<number> = this.store.pipe(select(selectProgress));
  isSelectedSolution$: Observable<boolean> = this.store.pipe(select(selectIsSelectedSolution));
  selectedSolution$: Observable<Solution> = this.store.pipe(select(selectSelectedSolution));

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.activatorStore;
  currentGridViewOption$: Observable<GridViewSwitchModel> = this.store.pipe(
    select(selectGridViewSwitchOptions, this.gridViewOptionsName)
  );

  userIsAdmin$: Observable<boolean> = this.store.pipe(select(selectUserIsAdmin));

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.resetAPIStatuses();
    this.store.dispatch(setProgress({ step: 0 }));
    this.categorySwitch$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));

    this.onSwitch(this.route.snapshot.queryParams.categorySwitch || 'Category');
  }

  resetAPIStatuses() {
    this.store.dispatch(resetAPICallStatuses());
  }

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
