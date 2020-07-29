import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamMember } from '../team-members.model';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-team-members-grid',
  templateUrl: './team-members-grid.component.html',
  styleUrls: ['./team-members-grid.component.scss']
})
export class TeamMembersGridComponent implements OnInit {
  displayedColumns: string[] = ['id', 'isActive', 'isTeamAdmin', 'role', 'userInfo'];
  dataSource: MatTableDataSource<{}>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    const teamMembers = this.route.snapshot.data['teamMembers'] as TeamMember[];
    const teamMembersDataSource = teamMembers.map(tm => ({
      ...tm,
      roleInfo: `${tm.role.name}/${tm.role.cloudIdentityGroup}`,
      userInfo: `${tm.user.firstName} ${tm.user.lastName} <${tm.user.email}>`
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
}
