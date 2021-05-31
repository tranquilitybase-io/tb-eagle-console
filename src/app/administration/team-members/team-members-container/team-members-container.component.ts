import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum,
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectUserId, selectUserIsLZAdmin } from '@app/login/login.reducer';
import { TeamMember } from '../team-members.model';

@Component({
  selector: 'app-team-members-container',
  templateUrl: './team-members-container.component.html',
  styleUrls: ['./team-members-container.component.scss'],
})
export class TeamMembersContainerComponent implements OnInit {
  currentGridViewOption$: Observable<string>;
  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.teamMembers;
  loggedUserId: number;
  TeamMembers: TeamMember[];
  userIsLZAdmin$: Observable<boolean>;
  userIsTeamAdmin: boolean;

  constructor(private store: Store<any>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions(this.gridViewOptionsName)));
    this.userIsLZAdmin$ = this.store.pipe(select(selectUserIsLZAdmin));
    this.store.pipe(select(selectUserId)).subscribe((userId) => (this.loggedUserId = userId));
    this.TeamMembers = this.route.snapshot.data['teamMembers'] as TeamMember[];
    this.userIsTeamAdmin = this.TeamMembers.some(
      (teamMember) => teamMember.userId === this.loggedUserId && teamMember.isTeamAdmin
    );
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map((currentGridViewOption) => currentGridViewOption === GridViewSwitchOptionsEnum.grid)
    );
  }

  addNewTeamMember() {
    let teamId = this.route.snapshot.data['team'].id;
    this.router.navigateByUrl(`/administration/teams/create-team-member?teamId=${teamId}`);
  }
}
