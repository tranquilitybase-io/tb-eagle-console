import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  displayedColumns: string[] = ['id', 'name', 'env', 'status', 'description', 'actions'];
  dataSource: MatTableDataSource<Application>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private route: ActivatedRoute, private router: Router) {
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

  viewApplication(id: number) {
    this.router.navigateByUrl(`/mission-control/solutions/view/application?id=${id}`);
  }

  statusColor(isActive: string): string {
    return isActive === 'Active' ? 'accent' : '';
  }
}
