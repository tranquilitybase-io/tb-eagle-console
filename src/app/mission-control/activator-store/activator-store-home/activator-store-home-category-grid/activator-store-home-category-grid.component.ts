import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/layout/layout.service';
import { Layout } from '@app/layout/layout.model';
import { ActivatorCategory } from '../../activator-store.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getActivatorCategories, getActivators, getMetaData } from '../../activator-store.actions';
import { selectCategories, selectGetActivatorCategoriesStatus } from '../../activator-store.reducer';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-activator-store-home-category-grid',
  templateUrl: './activator-store-home-category-grid.component.html',
  styleUrls: ['./activator-store-home-category-grid.component.scss'],
})
export class ActivatorStoreHomeCategoryGridComponent implements OnInit {
  layout$: Observable<Layout>;
  categories$: Observable<ActivatorCategory[]> = this.store.select(selectCategories);
  getActivatorCategoriesStatus$: Observable<Loadable> = this.store.select(selectGetActivatorCategoriesStatus);

  constructor(private layoutService: LayoutService, private router: Router, private store: Store<any>) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.store.dispatch(getActivatorCategories());
    this.store.dispatch(getMetaData());
  }

  nagivate(category: string) {
    this.router.navigate(['mission-control', 'activator-store'], {
      queryParams: { category },
    });
    this.store.dispatch(getActivators({ queryParams: [{ key: 'category', value: category }] }));
  }
}
