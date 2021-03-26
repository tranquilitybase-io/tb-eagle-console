import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../sites.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Loadable } from '@app/shared/shared.reducer';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum,
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { selectGetSitesStatus, selectSites } from '../sites.reducer';
import { getSites } from '../sites.actions';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

const DATA: Site[] = [
  {
    id: 1,
    name: 'Risk Monitoring Reports',
    CSPImgSrc: 'https://its.lmu.edu/media/its/aws.png',
    CSPName: 'AWS',
    region: 'us-west-1',
    status: 'Online',
    alerts: 21,
    solutions: 6,
    applications: 24,
    users: 154,
    version: '1.32.2',
    actions: 'Launch',
    actions2: 'Delete',
    dns: 'tranquilitybase-demo.io',
  },
  {
    id: 2,
    name: 'Logistics BI',
    CSPImgSrc: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png',
    CSPName: 'GCP',
    region: 'us-west1',
    status: 'Online',
    alerts: 12,
    solutions: 6,
    applications: 7,
    users: 244,
    version: '1.32.2',
    actions: 'Launch',
    actions2: 'Delete',
    dns: 'tranquilitybase-demo.io',
  },
  {
    id: 3,
    name: 'Quality AI Analysis',
    CSPImgSrc: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png',
    CSPName: 'GCP',
    region: 'europe-west2',
    status: 'Online',
    alerts: 13,
    solutions: 2,
    applications: 2,
    users: 244,
    version: '1.4.0',
    actions: 'Launch',
    actions2: 'Delete',
    dns: 'gftdevgcp.com',
  },
  {
    id: 4,
    name: 'Stocks Rebalancing Tracker',
    CSPImgSrc: 'https://www.edwinmsarmiento.com/wp-content/uploads/2016/04/windows-azure.png',
    CSPName: 'Azure',
    region: 'eastus2',
    status: 'Online',
    alerts: 0,
    solutions: 2,
    applications: 2,
    users: 4,
    version: '1.4.0',
    actions: 'Launch',
    actions2: 'Delete',
    dns: 'gft.com',
  },
];

@Component({
  selector: 'app-sites-home',
  templateUrl: './sites-home.component.html',
  styleUrls: ['./sites-home.component.scss'],
})
export class SitesHomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<any>) {}

  sites$: Observable<Site[]> = of(DATA);
  // sites$: Observable<TableData[]> = this.store.select(selectSites);
  getSitesStatus$: Observable<Loadable> = this.store.select(selectGetSitesStatus);

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.users;
  currentGridViewOption$: Observable<string>;

  ngOnInit() {
    this.queryInitialData();
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions(this.gridViewOptionsName)));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map((currentGridViewOption) => currentGridViewOption === GridViewSwitchOptionsEnum.grid)
    );
  }

  createNewSite() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  private queryInitialData() {
    this.store.dispatch(getSites());
  }
}
