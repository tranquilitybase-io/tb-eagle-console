import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../teams.model';
import { updateTeamData } from '../teams.actions';
import { KeyValue } from '@angular/common';
import { User } from '@app/login/login.model';

@Component({
  selector: 'app-teams-edit',
  templateUrl: './teams-edit.component.html',
  styleUrls: ['./teams-edit.component.scss']
})
export class TeamsEditComponent implements OnInit {
  team: Team;
  teamForm: FormGroup;
  businessUnitList: KeyValue<string, string>[];
  users: User[];

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];
    this.team = this.route.snapshot.data['team'] as Team;
    this.teamForm = this.formBuilder.group({
      id: this.team.id,
      name: [this.team.name, Validators.required],
      description: [this.team.description, Validators.required],
      businessUnitId: [this.team.businessUnitId, Validators.required]
    });
  }

  onSubmit(teamData) {
    this.store.dispatch(updateTeamData({ teamData }));
    this.router.navigateByUrl('/administration/teams');
  }
}
