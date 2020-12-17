import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activator, ActivatorsQueryParams } from '../../activator-store.model';
import { LayoutService } from '@app/layout/layout.service';
import { Layout } from '@app/layout/layout.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getActivators } from '../../activator-store.actions';
import { selectActivators, selectGetActivatorsStatus } from '../../activator-store.reducer';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-activator-store-home-grid',
  templateUrl: './activator-store-home-grid.component.html',
  styleUrls: ['./activator-store-home-grid.component.scss']
})
export class ActivatorStoreHomeGridComponent implements OnInit {
  activators$: Observable<Activator[]>;
  layout$: Observable<Layout>;
  userIsAdmin$: Observable<boolean>;
  getByActivatorsStatus$: Observable<Loadable> = this.store.select(selectGetActivatorsStatus);

  constructor(private layoutService: LayoutService, private route: ActivatedRoute, private store: Store<any>) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.activators$ = this.store.select(selectActivators);
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.route.queryParamMap.subscribe(queryParams => {
      this.getActivators(queryParams);
    });
  }

  getActivators(queryParams: ParamMap) {
    const category = queryParams.get('category');
    const status = queryParams.get('status');

    const params = {
      ...(category !== null && { category }),
      ...(status !== null && { status })
    };

    this.store.dispatch(getActivators({ queryParams: params as ActivatorsQueryParams }));
  }
}
