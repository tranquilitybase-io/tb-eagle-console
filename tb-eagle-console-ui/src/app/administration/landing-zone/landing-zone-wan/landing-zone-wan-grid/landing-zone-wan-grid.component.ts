import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';

@Component({
  selector: 'app-landing-zone-wan-grid',
  templateUrl: './landing-zone-wan-grid.component.html',
  styleUrls: ['./landing-zone-wan-grid.component.scss']
})
export class LandingZoneWanGridComponent implements OnInit {
  gridCols$: Observable<number>;

  constructor(private gridColsService: GridColsService) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {}

  createNewConnection() {}
}
