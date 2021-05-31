import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/administration/users/users.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { resetUpdateTeamMemberStatus, updateTeamMember } from '../team-members.actions';
import { TeamMember } from '../team-members.model';
import { Loadable } from '@app/shared/shared.reducer';
import { selectUpdateTeamMemberStatus } from '../team-members.reducer';

@Component({
  selector: 'app-team-members-edit',
  templateUrl: './team-members-edit.component.html',
  styleUrls: ['./team-members-edit.component.scss'],
})
export class TeamMembersEditComponent implements OnInit {
  teamMemberForm: FormGroup;
  teamMember: TeamMember;
  users$: Observable<User[]>;
  defaultTeam: KeyValue<string, string> = { key: '', value: '' };

  updateTeamMemberStatus$: Observable<Loadable> = this.store.select(selectUpdateTeamMemberStatus);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(resetUpdateTeamMemberStatus());

    this.teamMember = this.route.snapshot.data['teamMember'] as TeamMember;
    this.teamMemberForm = this.formBuilder.group({
      id: this.teamMember.id,
      isActive: this.teamMember.isActive,
      teamId: [this.teamMember.teamId, Validators.required],
      userId: [this.teamMember.userId, Validators.required],
      isTeamAdmin: [this.teamMember.isTeamAdmin, Validators.required],
    });

    this.updateTeamMemberStatus$.subscribe((status) => this.handleLoading(status));
  }

  private navigateToTeams() {
    this.router.navigateByUrl('/administration/teams');
  }

  private handleLoading = (status: Loadable) => {
    console.log(status);
    status.success && this.navigateToTeams();
    status.loading ? this.teamMemberForm.disable() : this.teamMemberForm.enable();
  };

  get form() {
    return this.teamMemberForm.controls;
  }

  get teamMemberInfo(): string {
    return `${this.teamMember.user.firstName} ${this.teamMember.user.lastName} <${this.teamMember.user.email}>`;
  }

  onSubmit(teamMember: TeamMember) {
    if (this.teamMemberForm.valid) {
      this.store.dispatch(updateTeamMember({ teamMember }));
    } else {
      this.teamMemberForm.markAllAsTouched();
    }
  }

  cancel() {
    let teamId;
    this.route.queryParams.subscribe((params) => (teamId = params.teamId));
    this.router.navigateByUrl(`/administration/teams/view?id=${teamId}`);
  }
}
