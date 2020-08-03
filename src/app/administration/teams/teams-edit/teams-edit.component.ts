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
  teamData: Team;
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
    this.teamData = this.route.snapshot.data['team'] as Team;
    this.teamForm = this.formBuilder.group({
      id: this.teamData.id,
      name: [this.teamData.name, Validators.required],
      description: [this.teamData.description, Validators.required],
      businessUnitId: [this.teamData.businessUnitId, Validators.required]
    });
  }

  get f() {
    return this.teamForm.controls;
  }

  cancel() {
    this.router.navigateByUrl('/administration/teams');
  }

  onSubmit(teamData) {
    this.store.dispatch(updateTeamData({ teamData }));
    this.router.navigateByUrl('/administration/teams');
  }
}
