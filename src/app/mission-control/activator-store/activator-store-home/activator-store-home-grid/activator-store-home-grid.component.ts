import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activator } from '../../activator-store.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';
import { ActivatorStoreService } from '../../activator-store.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setActivatorsCount } from '../../activator-store.actions';

@Component({
  selector: 'app-activator-store-home-grid',
  templateUrl: './activator-store-home-grid.component.html',
  styleUrls: ['./activator-store-home-grid.component.scss']
})
export class ActivatorStoreHomeGridComponent implements OnInit {
  activators$: Observable<Activator[]>;
  layout$: Observable<Layout>;

  constructor(
    private layoutService: LayoutService,
    private activatorStoreService: ActivatorStoreService,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    const categorySwitch = this.route.snapshot.queryParams.categorySwitch;
    this.activators$ = this.activatorStoreService.getByCategory(categorySwitch);
    this.activators$.subscribe((activators: Activator[]) => {
      this.store.dispatch(setActivatorsCount({ activatorsCount: activators.length }));
    });
  }
}
