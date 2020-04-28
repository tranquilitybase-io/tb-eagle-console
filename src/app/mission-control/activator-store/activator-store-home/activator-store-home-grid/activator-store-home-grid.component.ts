import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activator } from '../../activator-store.model';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
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
  gridCols$: Observable<number>;

  constructor(
    private gridColsService: GridColsService,
    private activatorStoreService: ActivatorStoreService,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {
    const categorySwitch = this.route.snapshot.queryParams.categorySwitch;
    this.activators$ = this.activatorStoreService.getByCategory(categorySwitch);
    this.activators$.subscribe((activators: Activator[]) => {
      this.store.dispatch(setActivatorsCount({ activatorsCount: activators.length }));
    });
  }
}
