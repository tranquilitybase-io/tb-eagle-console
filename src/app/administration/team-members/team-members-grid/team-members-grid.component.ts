import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMember } from '../team-members.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { selectUserId } from '@app/login/login.reducer';
import getCustomProperty from '@app/shared/utils/getCustomProperty';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-members-grid',
  templateUrl: './team-members-grid.component.html',
  styleUrls: ['./team-members-grid.component.scss']
})
export class TeamMembersGridComponent implements OnInit {
  @Input() _teamMembers?: Observable<TeamMember[]>;
  displayedColumns: string[] = ['id', 'isActive', 'isTeamAdmin', 'userInfo'];
  dataSource: MatTableDataSource<{}>;
  isUserTeamAdmin: boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private store: Store<any>) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    if (this._teamMembers === undefined) {
      const teamMembers = this.route.snapshot.data['teamMembers'] as TeamMember[];
      this.initTeamsGrid(teamMembers);
    } else {
      this._teamMembers.subscribe(teamMembers => {
        this.initTeamsGrid(teamMembers);
      });
    }
  }

  initTeamsGrid(teamMembers: TeamMember[]) {
    const teamMembersDataSource = teamMembers.map(tm => ({
      ...tm,
      roleInfo: '',
      userInfo: `${tm.user.firstName} ${tm.user.lastName} <${tm.user.email}>`
    }));
    this.dataSource = new MatTableDataSource(teamMembersDataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.store.select(selectUserId).subscribe(userId => {
      if (teamMembers.find(tM => tM.userId === userId)) {
        this.isUserTeamAdmin = teamMembers.find(tM => tM.userId === userId).isTeamAdmin;
      }
    });
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
}
