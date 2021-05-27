import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMember } from '../team-members.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserIsTeamAdmin, selectUser } from '@app/login/login.reducer';
import { User } from '@app/login/login.model';
import { Team } from '@app/administration/teams/teams.model';
import { selectTeams } from '@app/administration/teams/teams.reducer';

@Component({
  selector: 'app-team-members-grid',
  templateUrl: './team-members-grid.component.html',
  styleUrls: ['./team-members-grid.component.scss'],
})
export class TeamMembersGridComponent implements OnInit {
  @Input() isAddTeamMemberButtonVisible: boolean = true;
  @Input() _teamMembers?: Observable<TeamMember[]>;
  displayedColumns: string[] = ['id', 'isActive', 'isTeamAdmin', 'userInfo', 'actions'];
  dataSource: MatTableDataSource<{}>;
  userInfo$: Observable<User>;
  isUserTeamAdmin$: Observable<boolean>;
  teams$: Observable<Team[]>;
  teams;
  user;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private store: Store<any>, private router: Router) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.isUserTeamAdmin$ = this.store.pipe(select(selectUserIsTeamAdmin));
    this.userInfo$ = this.store.pipe(select(selectUser));
    this.userInfo$.subscribe((user) => (this.user = user));
    this.teams$ = this.store.pipe(select(selectTeams));
    this.teams$.subscribe((teams) => (this.teams = teams));
    if (this._teamMembers === undefined) {
      const teamMembers = this.route.snapshot.data['teamMembers'] as TeamMember[];
      this.initTeamsGrid(teamMembers);
    } else {
      this._teamMembers.subscribe((teamMembers) => {
        this.initTeamsGrid(teamMembers);
      });
    }
  }

  initTeamsGrid(teamMembers: TeamMember[]) {
    const teamMembersDataSource = teamMembers.map((tm) => ({
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

  viewUser(_id: number) {
    this.router.navigateByUrl(`/administration/users/view?id=${_id}`);
  }

  editUser(_id: number) {
    this.router.navigateByUrl(`/administration/users/edit?id=${_id}`);
  }

  isTeamAdmin() {
    let id = this.route.snapshot.queryParams.id - 1;
    let boolean;
    this.user.teams.forEach((team) => {
      if (this.teams[id]?.description === team && this.isTeamAdmin) {
        boolean = true;
      } else {
        boolean = false;
      }
    });
    return boolean;
  }
}
