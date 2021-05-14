import { getUsers } from './../users.actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.model';
import { Observable } from 'rxjs';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum,
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { select, Store } from '@ngrx/store';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { map } from 'rxjs/operators';
import { selectGetUsersStatus, selectUsers } from '../users.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { FilterOption, QueryParam } from './users-home-filter/users-home-filter.model';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss'],
})
export class UsersHomeComponent implements OnInit {
  [x: string]: any;
  users$: Observable<User[]> = this.store.select(selectUsers);
  getUsersStatus$: Observable<Loadable> = this.store.select(selectGetUsersStatus);

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.users;
  currentGridViewOption$: Observable<string>;

  constructor(private route: ActivatedRoute, private store: Store<any>, private router: Router) {}

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
    this.store.dispatch(getUsers({ queryParams: this.getCurrentQueryParams() }));
  }

  createNewUser() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onFilterListUpdate(filterOptions: FilterOption[]) {
    const queryParams = filterOptions.map((filterOption) => filterOption.filterQueryValue);
    //this.store.dispatch(getUsers({ queryParams }));
    this.store.dispatch(getUsers({ queryParams: [] }));
  }
}
