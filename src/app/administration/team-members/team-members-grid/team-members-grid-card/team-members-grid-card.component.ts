import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMember } from '../../team-members.model';
import { Observable } from 'rxjs';
import { selectUserId, selectUserIsLZAdmin } from '@app/login/login.reducer';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-team-members-grid-card',
  templateUrl: './team-members-grid-card.component.html',
  styleUrls: ['./team-members-grid-card.component.scss'],
})
export class TeamMembersGridCardComponent implements OnInit {
  @Input() userIsTeamAdmin: boolean;
  @Input() teamMember: TeamMember;
  userIsLZAdmin$: Observable<boolean>;
  loggedUserId: number;
  constructor(private store: Store<any>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.userIsLZAdmin$ = this.store.pipe(select(selectUserIsLZAdmin));
    this.store.pipe(select(selectUserId)).subscribe((userId) => (this.loggedUserId = userId));
  }

  viewUser(userId: number) {
    this.router.navigateByUrl(`/administration/users/view?id=${userId}`);
  }

  editUser(userId: number) {
    this.router.navigateByUrl(`/administration/users/edit?id=${userId}`);
  }
}
