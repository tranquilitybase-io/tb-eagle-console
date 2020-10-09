import { Component, OnInit } from '@angular/core';
import { BusinessUnitService } from '../business-unit.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/login/login.model';
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
import { getBusinessUnitList } from '../business-unit.actions';
@Component({
  selector: 'app-users-home',
  templateUrl: './business-unit-home.component.html',
  styleUrls: ['./business-unit-home.component.scss']
})
export class BusinessUnitsHomeComponent implements OnInit {
  [x: string]: any;
  users$: Observable<User[]>;
  businessUnitList$: Observable<BusinessUnit[]>;

  constructor(
    private businessUnitService: BusinessUnitService,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
    // this.users$ = usersService.filteredEntities$;
  }

  ngOnInit() {
    this.store.dispatch(getBusinessUnitList);
  }
}
