import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '@app/administration/teams/teams.service';
import { UsersService } from '@app/administration/users/users.service';
import { User } from '@app/login/login.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createTeamMember } from '../team-members.actions';
import { TeamMember } from '../team-members.model';

@Component({
  selector: 'app-team-members-create',
  templateUrl: './team-members-create.component.html',
  styleUrls: ['./team-members-create.component.scss']
})
export class TeamMembersCreateComponent implements OnInit {
  teamMemberForm: FormGroup;
  users$: Observable<User[]>;
  defaultTeam: KeyValue<string, string> = { key: '', value: '' };

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private router: Router,
    private teamsService: TeamsService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.teamMemberForm = this.formBuilder.group({
      id: 0,
      isActive: true,
      teamId: ['', Validators.required],
      userId: ['', Validators.required],
      isTeamAdmin: [false, Validators.required]
    });
    this.users$ = this.usersService.getAll();
    this.route.queryParams.subscribe(params => {
      this.teamsService.getTeamKeyValues().subscribe(teams => {
        this.defaultTeam.key = params['teamId'];
        this.defaultTeam.value = teams.find(team => team.key === parseInt(params['teamId'])).value;
        this.teamMemberForm.get('teamId').setValue(parseInt(this.defaultTeam.key));
      });
    });
  }

  get form() {
    return this.teamMemberForm.controls;
  }

  onSubmit(teamMember: TeamMember) {
    if (this.teamMemberForm.valid) {
      this.store.dispatch(createTeamMember({ teamMember }));
      this.router.navigateByUrl('/administration/teams');
    } else {
      this.teamMemberForm.markAllAsTouched();
    }
  }
}
