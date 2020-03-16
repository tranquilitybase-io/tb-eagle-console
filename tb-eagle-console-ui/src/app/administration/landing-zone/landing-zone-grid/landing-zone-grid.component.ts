import { Component, Input, OnInit } from '@angular/core';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { Observable } from 'rxjs';
import { LandingZoneAction } from '../landing-zone.model';
import { LandingZoneGridService } from './landing-zone-grid.service';

@Component({
  selector: 'app-landing-zone-grid',
  templateUrl: './landing-zone-grid.component.html',
  styleUrls: ['./landing-zone-grid.component.scss']
})
export class LandingZoneGridComponent implements OnInit {
  actions$: Observable<LandingZoneAction[]>;

  gridCols$: Observable<number>;

  constructor(private gridColsService: GridColsService, private landingZoneGridService: LandingZoneGridService) {
    this.actions$ = landingZoneGridService.filteredEntities$;
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {
    this.landingZoneGridService.getAll();
  }

  progressValueClass(value: number): string {
    return value < 10 ? 'one-digit' : value == 100 ? 'completed' : '';
  }
}
