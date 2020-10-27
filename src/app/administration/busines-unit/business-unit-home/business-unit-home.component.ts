import { getBusinessUnits } from './../business-unit.actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchModel,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { select, Store } from '@ngrx/store';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { map } from 'rxjs/operators';
import { BusinessUnit } from '../business-unit.model';
import { selectBusinessUnits, selectGetBusinessUnitsStatus } from '../business-unit.reducer';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-users-home',
  templateUrl: './business-unit-home.component.html',
  styleUrls: ['./business-unit-home.component.scss']
})
export class BusinessUnitsHomeComponent implements OnInit {
  [x: string]: any;
  businessUnits$: Observable<BusinessUnit[]> = this.store.select(selectBusinessUnits);
  getBusinessUnitsStatus$: Observable<Loadable> = this.store.select(selectGetBusinessUnitsStatus);

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.businessUnit;
  currentGridViewOption$: Observable<GridViewSwitchModel>;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(getBusinessUnits());
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions, this.gridViewOptionsName));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption.option === GridViewSwitchOptionsEnum.grid)
    );
  }
}
