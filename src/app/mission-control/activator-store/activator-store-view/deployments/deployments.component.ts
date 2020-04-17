import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeploymentsService } from '../deployments.service';
import { Application } from '@app/mission-control/solutions/solutions.model';

import { selectPage, selectLength } from '../view.reducer';
import { changePage } from '../view.actions';
import { ActivatedRoute } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.scss']
})
export class DeploymentsComponent implements OnInit {
  deployments$: Observable<Application[]>;
  displayedColumns: string[] = ['id', 'name', 'env', 'status', 'description'];
  dataSource: MatTableDataSource<Application>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private deploymentService: DeploymentsService, private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    const activatorId = this.route.snapshot.queryParams['id'];
    this.deploymentService
      .getWithQuery({ activatorId })
      .toPromise()
      .then(callback => {
        this.dataSource = new MatTableDataSource(callback);
      });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
