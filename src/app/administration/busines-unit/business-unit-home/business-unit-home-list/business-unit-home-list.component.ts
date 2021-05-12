import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessUnit } from '../../business-unit.model';

@Component({
  selector: 'app-business-unit-home-list',
  templateUrl: './business-unit-home-list.component.html',
  styleUrls: ['./business-unit-home-list.component.scss'],
})
export class BusinessUnitHomeListComponent implements OnInit {
  @Input() businessUnitList$: Observable<BusinessUnit[]>;
  @Input() isLoading: boolean;

  displayedColumns: string[] = ['name', 'description', 'actions'];

  dataSource: MatTableDataSource<BusinessUnit>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  filterValue: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.businessUnitList$.subscribe((businessUnits) => {
      this.dataSource = new MatTableDataSource(businessUnits);
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

  createNewBusinessUnit() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
