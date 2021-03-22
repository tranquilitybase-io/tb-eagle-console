import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { TableData } from './sites.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SitesService extends EntityCollectionServiceBase<TableData> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Site', serviceElementsFactory);
  }
  DATA: TableData[] = [
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

  getSites(): Observable<TableData[]> {
    return Observable.create((observer) => {
      observer.next(this.DATA);
      observer.complete();
    });
    //return of(this.DATA);
  }
}
