import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../users.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-home-list',
  templateUrl: './users-home-list.component.html',
  styleUrls: ['./users-home-list.component.scss'],
})
export class UsersHomeListComponent implements OnInit {
  @Input() users$: Observable<User[]>;
  @Input() isLoading: boolean;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'teamCount', 'actions'];

  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.users$.subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
