import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Team } from '../../teams.model';

@Component({
  selector: 'app-teams-home-list',
  templateUrl: './teams-home-list.component.html',
  styleUrls: ['./teams-home-list.component.scss'],
})
export class TeamsHomeListComponent implements OnInit {
  @Input() teams$: Observable<Team[]>;
  @Input() isLoading: boolean;

  displayedColumns: string[] = ['id', 'name', 'businessUnit', 'userCount', 'lastUpdated', 'description', 'actions'];
  dataSource: MatTableDataSource<Team>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.teams$.subscribe((teams) => {
      this.dataSource = new MatTableDataSource(teams);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
