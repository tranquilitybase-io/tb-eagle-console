import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { ActivatorCategory, ActivatorsMetadata } from '../../activator-store.model';
import { ActivatorStoreService } from '../../activator-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setCategoriesCount, setActivatorsCount } from '../../activator-store.actions';

@Component({
  selector: 'app-activator-store-home-category-grid',
  templateUrl: './activator-store-home-category-grid.component.html',
  styleUrls: ['./activator-store-home-category-grid.component.scss']
})
export class ActivatorStoreHomeCategoryGridComponent implements OnInit {
  gridCols$: Observable<number>;
  categories$: Observable<ActivatorCategory[]>;

  constructor(
    private activatorStoreService: ActivatorStoreService,
    private gridColsService: GridColsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>
  ) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {
    this.categories$ = this.activatorStoreService.getActivatorCategories();
    this.categories$.subscribe((categories: ActivatorCategory[]) => {
      this.store.dispatch(setCategoriesCount({ categoriesCount: categories.length }));
    });
    this.activatorStoreService.getMetadata().subscribe((activators_meta: ActivatorsMetadata) => {
      this.store.dispatch(setActivatorsCount({ activatorsCount: activators_meta.count }));
    });
  }

  nagivate(categorySwitch: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: { categorySwitch }
    });
  }
}
