import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingZoneAction } from '../../landing-zone.model';
import { LayoutService } from '@app/layout/layout.service';
import { Layout } from '@app/layout/layout.model';
import { Router } from '@angular/router';
import { LandingZoneHomeGridService } from './landing-zone-home-grid.service';

@Component({
  selector: 'app-landing-zone-home-grid',
  templateUrl: './landing-zone-home-grid.component.html',
  styleUrls: ['./landing-zone-home-grid.component.scss']
})
export class LandingZoneHomeGridComponent implements OnInit {
  actions$: Observable<LandingZoneAction[]>;
  layout$: Observable<Layout>;

  filterAllLength = 0;
  filterCompletedLength = 0;
  filterInProgressLength = 0;
  filterLockedLength = 0;

  constructor(
    private layoutService: LayoutService,
    private landingZoneGridService: LandingZoneHomeGridService,
    private router: Router
  ) {
    this.actions$ = landingZoneGridService.filteredEntities$;
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.landingZoneGridService.getAll().subscribe(actions => {
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
    this.landingZoneGridService.setFilter(filter);
  }
}
