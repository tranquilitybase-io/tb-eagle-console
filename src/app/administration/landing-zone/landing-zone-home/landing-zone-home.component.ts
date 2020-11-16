import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingZoneProgressItem } from '../landing-zone.model';
import { map, startWith, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectLandingZoneProgressItems } from '../landing-zone.reducer';
import { getLandingZoneProgressItems } from '../landing-zone.actions';

@Component({
  selector: 'app-landing-zone-home',
  templateUrl: './landing-zone-home.component.html',
  styleUrls: ['./landing-zone-home.component.scss']
})
export class LandingZoneHomeComponent implements OnInit {
  progressItems$: Observable<LandingZoneProgressItem[]> = this.store.select(selectLandingZoneProgressItems);
  selectedIndex$: Observable<number>;

  constructor(private store: Store<any>) {
    this.store.dispatch(getLandingZoneProgressItems());
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
