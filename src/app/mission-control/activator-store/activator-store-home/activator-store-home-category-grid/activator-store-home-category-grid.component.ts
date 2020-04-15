import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { ActivatorCategory } from '../../activator-store.model';
import { ActivatorStoreService } from '../../activator-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-activator-store-home-category-grid',
  templateUrl: './activator-store-home-category-grid.component.html',
  styleUrls: ['./activator-store-home-category-grid.component.scss']
})
export class ActivatorStoreHomeCategoryGridComponent implements OnInit {
  gridCols$: Observable<number>;
  categories$: Observable<ActivatorCategory[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gridColsService: GridColsService,
    private activatorStoreService: ActivatorStoreService
  ) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {
    this.categories$ = this.activatorStoreService.getActivatorCategories();
  }

  nagivate(categorySwitch: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: { categorySwitch }
    });
  }
}
