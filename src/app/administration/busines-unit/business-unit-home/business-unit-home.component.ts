import { Component, OnInit } from '@angular/core';
import { BusinessUnitService } from '../business-unit.service';
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

@Component({
  selector: 'app-users-home',
  templateUrl: './business-unit-home.component.html',
  styleUrls: ['./business-unit-home.component.scss']
})
export class BusinessUnitsHomeComponent implements OnInit {
  [x: string]: any;
  businessUnitList$: Observable<BusinessUnit[]>;

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.businessUnit;
  currentGridViewOption$: Observable<GridViewSwitchModel>;

  constructor(
    private businessUnitService: BusinessUnitService,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
    this.businessUnitList$ = businessUnitService.filteredEntities$;
  }

  ngOnInit() {
    this.businessUnitService.getAll();
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions, this.gridViewOptionsName));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption.option === GridViewSwitchOptionsEnum.grid)
    );
  }
}
