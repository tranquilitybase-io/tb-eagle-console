import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '@app/shared/layout/layout.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Activator } from '../../activator-store.model';
import { ActivatorStoreService } from '../../activator-store.service';
import { setActivatorsCount } from '../../activator-store.actions';
import { selectActivatorsByCategoryData } from '../../activator-store.reducer';

@Component({
  selector: 'app-activator-store-home-list',
  templateUrl: './activator-store-home-list.component.html',
  styleUrls: ['./activator-store-home-list.component.scss']
})
export class ActivatorStoreHomeListComponent implements OnInit {
  activators$: Observable<Activator[]>;
  layout$: Observable<Layout>;
  private statusColorMap: Map<string, string>;

  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'category',
    'type',
    'sensitivity',
    'environments',
    'cloudPlatforms',
    'lastUpdated',
    'description',
    'actions'
  ];
  dataSource: MatTableDataSource<Activator>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  filterValue: string = '';

  constructor(
    private layoutService: LayoutService,
    private store: Store<any>,
    private route: ActivatedRoute,
    private activatorStoreService: ActivatorStoreService
  ) {
    this.layout$ = this.layoutService.layoutObserver$;
    this.statusColorMap = new Map([
      ['available', 'accent'],
      ['deprecated', 'warn']
    ]);
  }

  ngOnInit() {
    const categorySwitch = this.route.snapshot.queryParams.categorySwitch;
    this.activatorStoreService.getByCategory(categorySwitch).subscribe((activators: Activator[]) => {
      this.store.dispatch(setActivatorsCount({ activatorsCount: activators.length }));
    });
    this.activators$ = this.store.select(selectActivatorsByCategoryData);
    this.activators$.subscribe(activators => {
      this.dataSource = new MatTableDataSource(activators);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filter = this.filterValue;
    });
  }

  applyFilter(filter: string) {
    this.filterValue = filter;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sensitivityColor(sensitivity: string): string {
    return String(sensitivity).toLowerCase() === 'restricted' ? 'warn' : '';
  }

  statusColor(status: string): string {
    return this.statusColorMap.get(String(status).toLowerCase());
  }
}
