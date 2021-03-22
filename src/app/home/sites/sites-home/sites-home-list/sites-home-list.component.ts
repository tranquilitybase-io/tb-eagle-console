import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../sites.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sites-home-list',
  templateUrl: './sites-home-list.component.html',
  styleUrls: ['./sites-home-list.component.scss'],
})
export class SitesHomeListComponent implements OnInit {
  @Input() sites$: Observable<TableData[]>;
  @Input() isLoading: boolean;
  //todo: column list

  displayedColumns: string[] = [
    'cloudImgSrc',
    'site',
    'status',
    'alerts',
    'solutions',
    'applications',
    //'users',
    'version',
    'organizationUrl',
    'actions',
  ];

  dataSource: MatTableDataSource<TableData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sites$.subscribe((sites) => {
      this.dataSource = new MatTableDataSource(sites);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
