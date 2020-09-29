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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
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
