import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Router } from '@angular/router';
import { WanConfiguration } from '../../landing-zone-wan.model';
import { Layout } from '@app/shared/layout/layout.model';
import { Store } from '@ngrx/store';
import { selectGetLandingZoneWansStatus, selectWanConfigurations } from '../../landing-zone-wan.reducer';
import { getLandingZoneWans } from '../../landing-zone-wan.actions';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-landing-zone-wan-home-vpn',
  templateUrl: './landing-zone-wan-home-vpn.component.html',
  styleUrls: ['./landing-zone-wan-home-vpn.component.scss']
})
export class LandingZoneWanHomeVpnComponent implements OnInit {
  wanConfigurations$: Observable<WanConfiguration[]> = this.store.select(selectWanConfigurations);
  getWanConfigurationsStatus$: Observable<Loadable> = this.store.select(selectGetLandingZoneWansStatus);

  layout$: Observable<Layout>;

  constructor(private store: Store<any>, private router: Router, private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.store.dispatch(getLandingZoneWans());
  }

  createNewConnection() {
    this.router.navigateByUrl(`/administration/landing-zone/wan/create/vpn`);
  }
}
