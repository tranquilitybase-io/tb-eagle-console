import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activator } from '../../activator-store.model';
import { LayoutService } from '@app/layout/layout.service';
import { Layout } from '@app/layout/layout.model';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectActivators, selectGetActivatorsStatus } from '../../activator-store.reducer';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-activator-store-home-grid',
  templateUrl: './activator-store-home-grid.component.html',
  styleUrls: ['./activator-store-home-grid.component.scss'],
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
  }
}
