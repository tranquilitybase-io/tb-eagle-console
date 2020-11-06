import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/layout/layout.service';
import { Router } from '@angular/router';
import { LandingZoneWanService } from '../../landing-zone-wan.service';
import { WanConfiguration } from '../../landing-zone-wan.model';
import { Layout } from '@app/layout/layout.model';

@Component({
  selector: 'app-landing-zone-wan-home-vpn',
  templateUrl: './landing-zone-wan-home-vpn.component.html',
  styleUrls: ['./landing-zone-wan-home-vpn.component.scss']
})
export class LandingZoneWanHomeVpnComponent implements OnInit {
  wanConfigurations$: Observable<WanConfiguration[]>;
  layout$: Observable<Layout>;

  constructor(
    private router: Router,
    private layoutService: LayoutService,
    private landingZoneWanService: LandingZoneWanService
  ) {
    this.wanConfigurations$ = landingZoneWanService.filteredEntities$;
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.landingZoneWanService.getAll();
  }

  createNewConnection() {
    this.router.navigateByUrl(`/administration/landing-zone/wan/create/vpn`);
  }
}
