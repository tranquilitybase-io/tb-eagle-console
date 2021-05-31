import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMember } from '../team-members.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserId, selectUserIsLZAdmin } from '@app/login/login.reducer';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.scss'],
})
export class TeamMembersListComponent implements OnInit {
  @Input() userIsTeamAdmin: boolean;
  @Input() TeamMembers$?: Observable<TeamMember[]>;

  dataSource: MatTableDataSource<{}>;
  displayedColumns: string[] = ['id', 'isActive', 'isTeamAdmin', 'userInfo', 'actions'];
  userIsLZAdmin$: Observable<boolean>;
  loggedUserId: number;
  TeamMembers: TeamMember[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private store: Store<any>, private router: Router) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.userIsLZAdmin$ = this.store.pipe(select(selectUserIsLZAdmin));
    this.store.pipe(select(selectUserId)).subscribe((userId) => (this.loggedUserId = userId));
    if (this.TeamMembers$ === undefined) {
      this.TeamMembers = this.route.snapshot.data['teamMembers'] as TeamMember[];
      this.initTeamsGrid();
    } else {
      this.TeamMembers$.subscribe((teamMembers) => {
        this.TeamMembers = teamMembers;
        this.initTeamsGrid();
      });
    }
  }

  initTeamsGrid() {
    const teamMembersDataSource = this.TeamMembers.map((tm) => ({
      ...tm,
      roleInfo: '',
      userInfo: `${tm.user.firstName} ${tm.user.lastName} <${tm.user.email}>`,
    }));
    this.dataSource = new MatTableDataSource(teamMembersDataSource);
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

  statusColor(isActive: boolean) {
    return isActive ? 'primary' : '';
  }

  viewTeamMember(id: number) {
    this.router.navigateByUrl(`/administration/teams/view-team-member?id=${id}`);
  }

  editTeamMember(id: number) {
    this.router.navigateByUrl(`/administration/teams/edit-team-member?id=${id}`);
  }
}
