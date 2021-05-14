import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedServicesAction } from '../../shared-services.model';
import { LayoutService } from '@app/layout/layout.service';
import { Layout } from '@app/layout/layout.model';
import { Router } from '@angular/router';
import { SharedServicesHomeService } from '../shared-services-home.service';
import { Loadable } from '@app/shared/shared.reducer';
import { selectGetsharedServicesActionsStatus } from '../shared-services-home.reducer';
import { Store } from '@ngrx/store';
import { getSharedServicesActions } from '../shared-services-home.actions';

@Component({
  selector: 'app-shared-services-home-grid',
  templateUrl: './shared-services-home-grid.component.html',
  styleUrls: ['./shared-services-home-grid.component.scss'],
})
export class SharedServicesHomeGridComponent implements OnInit {
  actions$: Observable<SharedServicesAction[]>;
  layout$: Observable<Layout>;
  getActionsStatus$: Observable<Loadable> = this.store.select(selectGetsharedServicesActionsStatus);

  filterAllLength = 0;
  filterCompletedLength = 0;
  filterInProgressLength = 0;
  filterLockedLength = 0;

  constructor(
    private layoutService: LayoutService,
    private sharedServicesService: SharedServicesHomeService,
    private router: Router,
    private store: Store<any>
  ) {
    this.actions$ = sharedServicesService.filteredEntities$;
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.store.dispatch(getSharedServicesActions());
    this.sharedServicesService.getAll().subscribe((actions) => {
      this.filterAllLength = actions.length;
      this.filterCompletedLength = actions.filter((action) => action.completionRate === 100).length;
      this.filterInProgressLength = actions.filter((action) => action.completionRate !== 100 && !action.locked).length;
      this.filterLockedLength = actions.filter((action) => action.locked).length;
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
    this.sharedServicesService.setFilter(filter);
  }
}
