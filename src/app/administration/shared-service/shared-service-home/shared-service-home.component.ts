import { getSharedServicesItems } from './../shared-service.actions';
import { Loadable } from './../../../shared/shared.reducer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SharedServicesItem } from '../shared-service.model';
import { selectGetSharedServicesItemsStatus, selectSharedServicesItems } from '../shared-service.reducer';

@Component({
  selector: 'app-landing-zone-home',
  templateUrl: './shared-service-home.component.html',
  styleUrls: ['./shared-service-home.component.scss']
})
export class SharedServiceHomeComponent implements OnInit {
  constructor(private store: Store<any>) {}

  sharedServiceItems$: Observable<SharedServicesItem>;
  getItemsStatus$: Observable<Loadable>;

  ngOnInit() {
    this.store.dispatch(getSharedServicesItems());

    this.sharedServiceItems$ = this.store.select(selectSharedServicesItems);
    this.getItemsStatus$ = this.store.select(selectGetSharedServicesItemsStatus);
  }
}
