import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { selectUserId, selectUserIsAdmin } from '@app/login/login.reducer';
import { Layout } from '@app/shared/layout/layout.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TeamMember } from '../team-members.model';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.scss']
})
export class TeamMembersListComponent implements OnInit {
  teamMembers: TeamMember[] = [];
  isUserTeamAdmin: boolean = false;
  userIsAdmin$: Observable<boolean>;
  layout$: Observable<Layout>;
  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private layout: LayoutService,
    private router: Router
  ) {
    this.layout$ = this.layout.layoutObserver$;
  }

  ngOnInit() {
    this.teamMembers = this.route.snapshot.data['teamMembers'] as TeamMember[];
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
    this.store.select(selectUserId).subscribe(userId => {
      if (this.teamMembers.find(tM => tM.userId === userId)) {
        this.isUserTeamAdmin = this.teamMembers.find(tM => tM.userId === userId).isTeamAdmin;
      }
    });
  }

  addNewTeamMember() {
    let teamId = this.route.snapshot.data['team'].id;
    this.router.navigateByUrl(`/administration/teams/create-team-member?teamId=${teamId}`);
  }
}
