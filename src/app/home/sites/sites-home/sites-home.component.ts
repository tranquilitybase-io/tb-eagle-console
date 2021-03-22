import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from '../sites.model';
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

const DATA: TableData[] = [
  {
    cloudImgSrc: 'https://its.lmu.edu/media/its/aws.png',
    site: 'us-west-1',
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
    cloudImgSrc: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png',
    site: 'us-west1',
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
    cloudImgSrc: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png',
    site: 'europe-west2',
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
    cloudImgSrc: 'https://www.edwinmsarmiento.com/wp-content/uploads/2016/04/windows-azure.png',
    site: 'eastus2',
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

  displayedColumns: string[] = [
    'cloudImgSrc',
    'site',
    'status',
    'alerts',
    'solutions',
    'applications',
    //'users',
    'version',
    'organizationUrl',
    'actions',
  ];
  //dataSource = DATA;

  sites$: Observable<TableData[]> = of(DATA);
  //sites$: Observable<TableData[]> = this.store.select(selectSites);
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
    //this.router.navigate(['create'], { relativeTo: this.route });
  }

  private queryInitialData() {
    this.store.dispatch(getSites());
    //this.store.dispatch(getSites());
  }
}
