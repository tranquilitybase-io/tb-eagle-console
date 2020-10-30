import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activator } from '../../activator-store.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';
import { ActivatorStoreService } from '../../activator-store.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getByCategory } from '../../activator-store.actions';
import { selectActivatorsByCategoryData, selectGetByCategoryStatus } from '../../activator-store.reducer';
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
  getByCategoryStatus$: Observable<Loadable> = this.store.select(selectGetByCategoryStatus);

  constructor(private layoutService: LayoutService, private route: ActivatedRoute, private store: Store<any>) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    const categorySwitch = this.route.snapshot.queryParams.categorySwitch;
    this.store.dispatch(getByCategory({ category: categorySwitch }));
    this.activators$ = this.store.select(selectActivatorsByCategoryData);
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
  }
}
