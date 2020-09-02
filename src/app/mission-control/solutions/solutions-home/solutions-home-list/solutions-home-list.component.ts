import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from '../../solutions.model';
import { Layout } from '@app/shared/layout/layout.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-solutions-home-list',
  templateUrl: './solutions-home-list.component.html',
  styleUrls: ['./solutions-home-list.component.scss']
})
export class SolutionsHomeListComponent implements OnInit {
  @Input() solutions$: Observable<Solution[]>;
  layout$: Observable<Layout>;

  displayedColumns: string[] = ['id', 'name', 'status', 'appCount', 'team', 'lastUpdated', 'description'];
  dataSource: MatTableDataSource<Solution>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.solutions$.subscribe(solutions => {
      this.dataSource = new MatTableDataSource(solutions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
