import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { selectUserId } from '@app/login/login.reducer';
import { Layout } from '@app/shared/layout/layout.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Store } from '@ngrx/store';
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
  layout$: Observable<Layout>;
  constructor(private route: ActivatedRoute, private store: Store<any>, private layout: LayoutService) {
    this.layout$ = this.layout.layoutObserver$;
  }

  ngOnInit() {
    this.teamMembers = this.route.snapshot.data['teamMembers'] as TeamMember[];
    this.store.select(selectUserId).subscribe(userId => {
      if (this.teamMembers.find(tM => tM.userId === userId)) {
        this.isUserTeamAdmin = this.teamMembers.find(tM => tM.userId === userId).isTeamAdmin;
      }
    });
  }
}
