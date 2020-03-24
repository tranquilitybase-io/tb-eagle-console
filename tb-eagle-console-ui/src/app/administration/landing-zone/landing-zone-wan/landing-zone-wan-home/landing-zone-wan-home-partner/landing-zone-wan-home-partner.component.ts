import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';

@Component({
  selector: 'app-landing-zone-wan-home-partner',
  templateUrl: './landing-zone-wan-home-partner.component.html',
  styleUrls: ['./landing-zone-wan-home-partner.component.scss']
})
export class LandingZoneWanHomePartnerComponent implements OnInit {
  gridCols$: Observable<number>;

  constructor(private gridColsService: GridColsService) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {}

  createNewConnection() {}
}
