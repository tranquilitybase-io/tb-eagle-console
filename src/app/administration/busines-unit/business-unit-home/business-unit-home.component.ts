import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum,
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { select, Store } from '@ngrx/store';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { map } from 'rxjs/operators';
import { BusinessUnit } from '../business-unit.model';
import { getBusinessUnits } from '../business-unit.actions';
import { selectBusinessUnits, selectGetBusinessUnitsStatus } from '../business-unit.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { FilterOption, QueryParam } from './business-unit-home-filter/business-unit-home-filter.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-home',
  templateUrl: './business-unit-home.component.html',
  styleUrls: ['./business-unit-home.component.scss'],
})
export class BusinessUnitsHomeComponent implements OnInit {
  [x: string]: any;
  businessUnits$: Observable<BusinessUnit[]> = this.store.select(selectBusinessUnits);
  getBusinessUnitsStatus$: Observable<Loadable> = this.store.select(selectGetBusinessUnitsStatus);

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.businessUnit;
  currentGridViewOption$: Observable<string>;

  constructor(private store: Store<any>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.queryInitialData();
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions(this.gridViewOptionsName)));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map((currentGridViewOption) => currentGridViewOption === GridViewSwitchOptionsEnum.grid)
    );
  }

  private getCurrentQueryParams(): QueryParam[] {
    const initQueryParams = this.route.snapshot.queryParams;
    const params = Object.keys(initQueryParams).map((key) => ({ key: key, value: initQueryParams[key] }));
    return params;
  }

  private queryInitialData() {
    this.store.dispatch(getBusinessUnits({ queryParams: this.getCurrentQueryParams() }));
  }

  onFilterListUpdate(filterOptions: FilterOption[]) {
    const queryParams = filterOptions.map((filterOption) => filterOption.filterQueryValue);
    this.store.dispatch(getBusinessUnits({ queryParams }));
  }

  createNewBusinessUnit() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
