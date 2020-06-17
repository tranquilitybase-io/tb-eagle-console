import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Team } from '../teams.model';
import { updateTeamData } from '../teams.actions';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-teams-edit',
  templateUrl: './teams-edit.component.html',
  styleUrls: ['./teams-edit.component.scss']
})
export class TeamsEditComponent implements OnInit {
  teamData: Team;
  teamForm: FormGroup;
  teamMembersForm: FormGroup;
  businessUnitList: KeyValue<string, string>[];

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];
    this.teamForm = this.formBuilder.group({
      id: this.teamData.id,
      name: [this.teamData.name],
      isActive: [this.teamData.isActive],
      description: [this.teamData.description],
      businessUnitId: [this.teamData.businessUnitId]
    });
  }

  onSubmit(teamData) {
    this.store.dispatch(updateTeamData({ teamData }));
    this.router.navigateByUrl('/administration/teams');
  }
}
