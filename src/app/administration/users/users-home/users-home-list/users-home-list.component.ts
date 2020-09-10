import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../users.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-home-list',
  templateUrl: './users-home-list.component.html',
  styleUrls: ['./users-home-list.component.scss']
})
export class UsersHomeListComponent implements OnInit {
  @Input() users$: Observable<User[]>;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];

  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  filterValue: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.users$.subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
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

  createNewUser() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
