import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../teams.model';
import { map } from 'rxjs/operators';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum,
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { Store } from '@ngrx/store';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { getTeams } from '../teams.actions';
import { selectGetTeamsStatus, selectTeams } from './../teams.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { FilterOption, QueryParam } from './teams-home-filter/teams-home-filter.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teams-home',
  templateUrl: './teams-home.component.html',
  styleUrls: ['./teams-home.component.scss'],
})
export class TeamsHomeComponent implements OnInit {
  teams$: Observable<Team[]>;
  getTeamsStatus$: Observable<Loadable> = this.store.select(selectGetTeamsStatus);
  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.teams;
  currentGridViewOption$: Observable<string>;

  constructor(private store: Store<any>, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.queryInitialData();
    this.teams$ = this.store.select(selectTeams);
    this.currentGridViewOption$ = this.store.select(selectGridViewSwitchOptions(this.gridViewOptionsName));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(map((option) => option === GridViewSwitchOptionsEnum.grid));
  }

  private getCurrentQueryParams(): QueryParam[] {
    const initQueryParams = this.route.snapshot.queryParams;
    const params = Object.keys(initQueryParams).map((key) => ({ key: key, value: initQueryParams[key] }));
    return params;
  }

  private queryInitialData() {
    this.store.dispatch(getTeams({ queryParams: this.getCurrentQueryParams() }));
  }

  onFilterListUpdate(filterOptions: FilterOption[]) {
    const queryParams = filterOptions.map((filterOption) => filterOption.filterQueryValue);
    this.store.dispatch(getTeams({ queryParams }));
    //this.store.dispatch(getTeams({ queryParams: [] }));
  }

  createNewTeam() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
