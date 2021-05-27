import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMember } from '../team-members.model';
import { Observable } from 'rxjs';
import { selectUser, selectUserIsTeamAdmin } from '@app/login/login.reducer';
import { select, Store } from '@ngrx/store';
import { User } from '@app/login/login.model';
import { Team } from '@app/administration/teams/teams.model';
import { selectTeams } from '@app/administration/teams/teams.reducer';

@Component({
  selector: 'app-team-members-grid-card',
  templateUrl: './team-members-grid-card.component.html',
  styleUrls: ['./team-members-grid-card.component.scss'],
})
export class TeamMembersGridCardComponent implements OnInit {
  @Input() teamMember: TeamMember;
  userInfo$: Observable<User>;
  isUserTeamAdmin$: Observable<boolean>;
  teams$: Observable<Team[]>;
  teams;
  user;
  constructor(private store: Store<any>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.isUserTeamAdmin$ = this.store.pipe(select(selectUserIsTeamAdmin));
    this.userInfo$ = this.store.pipe(select(selectUser));
    this.userInfo$.subscribe((user) => (this.user = user));
    this.teams$ = this.store.pipe(select(selectTeams));
    this.teams$.subscribe((teams) => (this.teams = teams));
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
