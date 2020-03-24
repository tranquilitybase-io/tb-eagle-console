import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingZoneProgressItem } from '../landing-zone.model';
import { LandingZoneService } from '../landing-zone.service';
import { map, startWith, delay } from 'rxjs/operators';

@Component({
  selector: 'app-landing-zone-home',
  templateUrl: './landing-zone-home.component.html',
  styleUrls: ['./landing-zone-home.component.scss']
})
export class LandingZoneHomeComponent implements OnInit {
  progressItems$: Observable<LandingZoneProgressItem[]>;
  selectedIndex$: Observable<number>;

  constructor(landingZoneService: LandingZoneService) {
    this.progressItems$ = landingZoneService.getAll();
  }

  ngOnInit() {
    this.selectedIndex$ = this.progressItems$.pipe(
      map(items => {
        const index = items.findIndex(item => !item.completed);
        return index < 0 ? 0 : index;
      }),
      startWith(0),
      delay(0)
    );
  }
}
