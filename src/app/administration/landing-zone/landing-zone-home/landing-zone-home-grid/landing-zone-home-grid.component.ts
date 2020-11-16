import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingZoneAction } from '../../landing-zone.model';
import { LayoutService } from '@app/layout/layout.service';
import { Layout } from '@app/layout/layout.model';
import { Router } from '@angular/router';
import { LandingZoneHomeService } from '../landing-zone-home.service';
import { Loadable } from '@app/shared/shared.reducer';
import { selectGetlandingZoneActionsStatus } from '../landing-zone-home.reducer';
import { Store } from '@ngrx/store';
import { getLandingZoneActions } from '../landing-zone-home.actions';

@Component({
  selector: 'app-landing-zone-home-grid',
  templateUrl: './landing-zone-home-grid.component.html',
  styleUrls: ['./landing-zone-home-grid.component.scss']
})
export class LandingZoneHomeGridComponent implements OnInit {
  actions$: Observable<LandingZoneAction[]>;
  layout$: Observable<Layout>;
  getActionsStatus$: Observable<Loadable> = this.store.select(selectGetlandingZoneActionsStatus);

  filterAllLength = 0;
  filterCompletedLength = 0;
  filterInProgressLength = 0;
  filterLockedLength = 0;

  constructor(
    private layoutService: LayoutService,
    private landingZoneService: LandingZoneHomeService,
    private router: Router,
    private store: Store<any>
  ) {
    this.actions$ = landingZoneService.filteredEntities$;
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.store.dispatch(getLandingZoneActions());
    this.landingZoneService.getAll().subscribe(actions => {
      this.filterAllLength = actions.length;
      this.filterCompletedLength = actions.filter(action => action.completionRate === 100).length;
      this.filterInProgressLength = actions.filter(action => action.completionRate !== 100 && !action.locked).length;
      this.filterLockedLength = actions.filter(action => action.locked).length;
    });
  }

  progressValueClass(value: number): string {
    return value < 10 ? 'one-digit' : value == 100 ? 'completed' : '';
  }

  actionNagivate(routerLink: string) {
    if (routerLink) {
      this.router.navigateByUrl(routerLink);
    }
  }

  setFilter(filter: string) {
    this.landingZoneService.setFilter(filter);
  }
}
