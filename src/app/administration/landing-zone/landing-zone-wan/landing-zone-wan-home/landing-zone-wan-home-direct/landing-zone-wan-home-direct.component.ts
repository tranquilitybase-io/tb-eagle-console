import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';

@Component({
  selector: 'app-landing-zone-wan-home-direct',
  templateUrl: './landing-zone-wan-home-direct.component.html',
  styleUrls: ['./landing-zone-wan-home-direct.component.scss']
})
export class LandingZoneWanHomeDirectComponent implements OnInit {
  gridCols$: Observable<number>;

  constructor(private gridColsService: GridColsService) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {}

  createNewConnection() {}
}
