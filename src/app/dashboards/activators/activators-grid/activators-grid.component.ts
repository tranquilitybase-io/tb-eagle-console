import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activator } from '../activators.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProgress } from '../activators.actions';
import { map } from 'rxjs/operators';
import { ActivatorsService } from '../activators.service';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';

@Component({
  selector: 'app-activators-grid',
  templateUrl: './activators-grid.component.html',
  styleUrls: ['./activators-grid.component.scss']
})
export class ActivatorsGridComponent implements OnInit {
  current$: Observable<string>;
  activators$: Observable<Activator[]>;
  gridCols$: Observable<number>;

  categoryCount = 8;
  allCount = 50;

  constructor(
    private activatorsService: ActivatorsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
    private gridColsService: GridColsService
  ) {
    this.activators$ = activatorsService.filteredEntities$;
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {
    this.activatorsService.getAll();
    this.store.dispatch(setProgress({ step: 0 }));
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));

    this.onSwitch(this.route.snapshot.queryParams.categorySwitch || 'Category');
  }

  get values_controls(): { name: string; count: number }[] {
    return [
      {
        name: 'Category',
        count: this.categoryCount
      },
      {
        name: 'All',
        count: this.allCount
      }
    ];
  }

  onSwitch(name: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        categorySwitch: name
      }
    });
  }
}
