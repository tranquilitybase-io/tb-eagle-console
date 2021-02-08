import { Component, OnInit } from '@angular/core';
import { Solution } from '../solutions.model';
import { Observable } from 'rxjs';
import {
  SolutionsState,
  selectSolutionDeploymentsData,
  selectGetSolutionsStatus,
  selectSolutions
} from '../solutions.reducer';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { getSolutions, getSolutionsSilentLoading } from './../solutions.actions';
import { FilterOption, QueryParam } from './solutions-home-list-filter/solutions-home-list-filter.model';

@Component({
  selector: 'app-solutions-home',
  templateUrl: './solutions-home.component.html',
  styleUrls: ['./solutions-home.component.scss']
})
export class SolutionsHomeComponent implements OnInit {
  solutions$: Observable<Solution[]>;
  active = false;
  getSolutionsStatus$: Observable<Loadable> = this.store.select(selectGetSolutionsStatus);

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.solutions;
  currentGridViewOption$: Observable<string>;

  constructor(private store: Store<SolutionsState>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.queryInitialData();
    this.subscribeToSolutionDeploymentsData();
    this.solutions$ = this.store.select(selectSolutions);
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions(this.gridViewOptionsName)));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption === GridViewSwitchOptionsEnum.grid)
    );
  }

  private getCurrentQueryParams(): QueryParam[] {
    const initQueryParams = this.route.snapshot.queryParams;
    const params = Object.keys(initQueryParams).map(key => ({ key: key, value: initQueryParams[key] }));
    return params;
  }

  private queryInitialData() {
    this.store.dispatch(getSolutions({ queryParams: this.getCurrentQueryParams() }));
  }

  private subscribeToSolutionDeploymentsData() {
    this.store.pipe(select(selectSolutionDeploymentsData)).subscribe(() => {
      this.store.dispatch(getSolutionsSilentLoading({ queryParams: this.getCurrentQueryParams() }));
    });
  }

  onFilterListUpdate(filterOptions: FilterOption[]) {
    const queryParams = filterOptions.map(filterOption => filterOption.filterQueryValue);
    this.store.dispatch(getSolutions({ queryParams }));
  }

  createNewSolution() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
