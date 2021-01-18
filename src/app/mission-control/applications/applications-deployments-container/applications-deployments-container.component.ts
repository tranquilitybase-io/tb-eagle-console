import { Component, OnInit } from '@angular/core';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-applications-deployments-container',
  templateUrl: './applications-deployments-container.component.html',
  styleUrls: ['./applications-deployments-container.component.scss']
})
export class ApplicationsDeploymentsContainerComponent implements OnInit {
  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.applicationDeployments;
  currentGridViewOption$: Observable<string>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions(this.gridViewOptionsName)));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption === GridViewSwitchOptionsEnum.grid)
    );
  }
}
