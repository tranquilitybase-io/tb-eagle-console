import { Component, OnInit } from '@angular/core';
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
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { resetAPICallStatuses, getActivators } from './../activator-store.actions';
import { FilterOption, QueryParam } from './activator-store-home-list-filter/activator-store-home-list-filter.model';
import { Activator } from '../activator-store.model';

@Component({
  selector: 'app-activator-store-home',
  templateUrl: './activator-store-home.component.html',
  styleUrls: ['./activator-store-home.component.scss']
})
export class ActivatorStoreHomeComponent implements OnInit {
  activators$: Observable<Activator[]>;
  category$: Observable<string>;
  category: string;
  status: string;
  showCategoriesParam$: Observable<string>;
  categoriesCount$: Observable<number> = this.store.pipe(select(selectCategoriesCount));
  activatorsCount$: Observable<number> = this.store.pipe(select(selectActivatorsCount));

  categories = ['Web applications'];

  progress$: Observable<number> = this.store.pipe(select(selectProgress));
  isSelectedSolution$: Observable<boolean> = this.store.pipe(select(selectIsSelectedSolution));
  selectedSolution$: Observable<Solution> = this.store.pipe(select(selectSelectedSolution));

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.activatorStore;
  currentGridViewOption$: Observable<string> = this.store.pipe(
    select(selectGridViewSwitchOptions(this.gridViewOptionsName))
  );

  userIsAdmin$: Observable<boolean> = this.store.pipe(select(selectUserIsAdmin));
  displayCategoryPage = true;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<any>) {}

  ngOnInit() {
    this.resetAPIStatuses();
    this.queryInitialData();
    this.store.dispatch(setProgress({ step: 0 }));
  }

  private getCurrentQueryParams(): QueryParam[] {
    const initQueryParams = this.route.snapshot.queryParams;
    let params = Object.keys(initQueryParams).map(key => ({ key: key, value: initQueryParams[key] }));
    return params;
  }

  onFilterListUpdate(filterOptions: FilterOption[]) {
    const queryParams = filterOptions.map(filterOption => filterOption.filterQueryValue);
    this.store.dispatch(getActivators({ queryParams }));
  }

  private queryInitialData() {
    this.store.dispatch(getActivators({ queryParams: this.getCurrentQueryParams() }));
  }

  resetAPIStatuses() {
    this.store.dispatch(resetAPICallStatuses());
  }

  cancel() {
    this.store.dispatch(discardSelectedSolution());
    this.router.navigateByUrl('/mission-control/solutions');
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption === GridViewSwitchOptionsEnum.grid)
    );
  }

  get showCategories$(): Observable<boolean> {
    return this.route.queryParamMap.pipe(
      map(queryParams => {
        if (queryParams.keys.length !== 0) {
          this.displayCategoryPage = false;
        }
        return this.displayCategoryPage;
      })
    );
  }

  showInitialPage() {
    this.displayCategoryPage = true;
  }
}
