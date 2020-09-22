import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMember } from '../team-members.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { selectUserId, selectUserIsAdmin } from '@app/login/login.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-members-grid',
  templateUrl: './team-members-grid.component.html',
  styleUrls: ['./team-members-grid.component.scss']
})
export class TeamMembersGridComponent implements OnInit {
  displayedColumns: string[] = ['id', 'isActive', 'isTeamAdmin', 'userInfo'];
  dataSource: MatTableDataSource<{}>;
  isUserTeamAdmin = false;
  userIsAdmin$: Observable<boolean>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private store: Store<any>, private router: Router) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    const teamMembers = this.route.snapshot.data['teamMembers'] as TeamMember[];
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
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

  addNewTeamMember() {
    let teamId = this.route.snapshot.data['team'].id;
    this.router.navigateByUrl(`/administration/teams/create-team-member?teamId=${teamId}`);
  }
}
