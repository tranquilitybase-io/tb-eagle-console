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
import { selectUserIsLZAdmin, selectUserIsTeamAdmin } from '@app/login/login.reducer';

@Component({
  selector: 'app-team-members-container',
  templateUrl: './team-members-container.component.html',
  styleUrls: ['./team-members-container.component.scss'],
})
export class TeamMembersContainerComponent implements OnInit {
  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.teamMembers;
  currentGridViewOption$: Observable<string>;
  isUserTeamAdmin$: Observable<boolean>;
  userIsLZAdmin$: Observable<boolean>;
  constructor(private store: Store<any>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions(this.gridViewOptionsName)));
    this.userIsLZAdmin$ = this.store.pipe(select(selectUserIsLZAdmin));
    this.isUserTeamAdmin$ = this.store.pipe(select(selectUserIsTeamAdmin));
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
