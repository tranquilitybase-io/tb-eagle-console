import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { Router } from '@angular/router';
import { LandingZoneWanService } from '../../landing-zone-wan.service';
import { WanConfiguration } from '../../landing-zone-wan.model';

@Component({
  selector: 'app-landing-zone-wan-home-vpn',
  templateUrl: './landing-zone-wan-home-vpn.component.html',
  styleUrls: ['./landing-zone-wan-home-vpn.component.scss']
})
export class LandingZoneWanHomeVpnComponent implements OnInit {
  wanConfigurations$: Observable<WanConfiguration[]>;
  gridCols$: Observable<number>;

  constructor(
    private router: Router,
    private gridColsService: GridColsService,
    private landingZoneWanService: LandingZoneWanService
  ) {
    this.wanConfigurations$ = landingZoneWanService.filteredEntities$;
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {
    this.landingZoneWanService.getAll();
  }

  createNewConnection() {
    this.router.navigateByUrl(`/administration/landing-zone/wan/forms/vpn`);
  }
}
