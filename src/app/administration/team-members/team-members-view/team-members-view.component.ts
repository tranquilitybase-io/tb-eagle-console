import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/administration/users/users.model';
import { Observable } from 'rxjs';
import { TeamMember } from '../team-members.model';

@Component({
  selector: 'app-team-members-view',
  templateUrl: './team-members-view.component.html',
  styleUrls: ['./team-members-view.component.scss'],
})
export class TeamMembersViewComponent implements OnInit {
  teamMember: TeamMember;
  users$: Observable<User[]>;
  defaultTeam: KeyValue<string, string> = { key: '', value: '' };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.teamMember = this.route.snapshot.data['teamMember'] as TeamMember;
  }

  get teamMemberInfo(): string {
    return `${this.teamMember.user.firstName} ${this.teamMember.user.lastName} <${this.teamMember.user.email}>`;
  }

  back() {
    this.router.navigateByUrl(`/administration/teams/view?id=${this.teamMember.teamId}`);
  }
}
