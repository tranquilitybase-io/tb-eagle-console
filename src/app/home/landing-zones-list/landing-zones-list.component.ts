import { Component, OnInit } from '@angular/core';
import { TableData } from './landing-zones-list.model';
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
    dns: 'tranquilitybase-demo.io'
  },
  {
    cloudImgSrc: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png',
    site: 'us-west-1',
    status: 'Online',
    alerts: 12,
    solutions: 6,
    applications: 7,
    users: 244,
    version: '1.32.2',
    actions: 'Launch',
    actions2: 'Delete',
    dns: 'tranquilitybase-demo.io'
  },
  {
    cloudImgSrc: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png',
    site: 'asia-northeast1',
    status: 'Online',
    alerts: 13,
    solutions: 2,
    applications: 2,
    users: 244,
    version: '1.4.0',
    actions: 'Launch',
    actions2: 'Delete',
    dns: 'gftdevgcp.com'
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
    dns: 'gft.com'
  }
];

@Component({
  selector: 'app-layout',
  templateUrl: './landing-zones-list.component.html',
  styleUrls: ['./landing-zones-list.component.scss']
})
export class LandingZonesListComponent implements OnInit {
  displayedColumns: string[] = [
    'cloudImgSrc',
    'site',
    'status',
    'alerts',
    'solutions',
    'applications',
    'users',
    'version',
    'organizationUrl',
    'actions'
  ];
  dataSource = DATA;
  constructor() {}
  ngOnInit() {}
}
