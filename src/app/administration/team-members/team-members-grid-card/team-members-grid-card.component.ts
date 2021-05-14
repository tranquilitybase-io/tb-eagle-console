import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMember } from '../team-members.model';

@Component({
  selector: 'app-team-members-grid-card',
  templateUrl: './team-members-grid-card.component.html',
  styleUrls: ['./team-members-grid-card.component.scss'],
})
export class TeamMembersGridCardComponent implements OnInit {
  @Input() teamMember: TeamMember;
  constructor(private router: Router) {}

  ngOnInit() {}

  viewUser(_id: number) {
    this.router.navigateByUrl(`/administration/users/view?id=${_id}`);
  }
}
