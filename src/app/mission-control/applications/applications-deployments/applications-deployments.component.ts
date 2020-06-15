import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Application } from '../applications.model';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-applications-deployments',
  templateUrl: './applications-deployments.component.html',
  styleUrls: ['./applications-deployments.component.scss']
})
export class ApplicationsDeploymentsComponent implements OnInit {
  deployments$: Observable<Application[]>;
  displayedColumns: string[] = ['id', 'name', 'env', 'status', 'description'];
  dataSource: MatTableDataSource<Application>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    const applications = this.route.snapshot.data['applications'] as Application[];
    this.dataSource = new MatTableDataSource(applications);
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
