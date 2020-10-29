import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { Team } from '../../teams.model';

@Component({
  selector: 'app-teams-home-list',
  templateUrl: './teams-home-list.component.html',
  styleUrls: ['./teams-home-list.component.scss']
})
export class TeamsHomeListComponent implements OnInit {
  @Input() teams$: Observable<Team[]>;
  @Input() isLoading: boolean;

  displayedColumns: string[] = ['id', 'name', 'businessUnit', 'userCount', 'lastUpdated', 'description', 'actions'];
  dataSource: MatTableDataSource<Team>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  filterValue: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.teams$.subscribe(teams => {
      this.dataSource = new MatTableDataSource(teams);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filter = this.filterValue;
    });
  }

  createNewTeam() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  applyFilter(filter: string) {
    this.filterValue = filter;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
