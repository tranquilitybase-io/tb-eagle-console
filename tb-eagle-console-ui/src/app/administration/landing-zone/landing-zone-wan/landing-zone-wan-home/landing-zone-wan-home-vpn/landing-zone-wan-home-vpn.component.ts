import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-zone-wan-home-vpn',
  templateUrl: './landing-zone-wan-home-vpn.component.html',
  styleUrls: ['./landing-zone-wan-home-vpn.component.scss']
})
export class LandingZoneWanHomeVPNComponent implements OnInit {
  gridCols$: Observable<number>;

  constructor(private router: Router, private gridColsService: GridColsService) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {}

  createNewConnection() {
    this.router.navigateByUrl(`/administration/landing-zone/wan/forms/vpn`);
  }
}
