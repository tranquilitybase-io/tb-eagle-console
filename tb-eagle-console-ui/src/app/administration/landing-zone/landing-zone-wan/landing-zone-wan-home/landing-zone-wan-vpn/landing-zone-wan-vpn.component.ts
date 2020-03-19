import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';

@Component({
  selector: 'app-landing-zone-wan-vpn',
  templateUrl: './landing-zone-wan-vpn.component.html',
  styleUrls: ['./landing-zone-wan-vpn.component.scss']
})
export class LandingZoneWanVPNComponent implements OnInit {
  gridCols$: Observable<number>;

  constructor(private gridColsService: GridColsService) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {}

  createNewConnection() {}
}
