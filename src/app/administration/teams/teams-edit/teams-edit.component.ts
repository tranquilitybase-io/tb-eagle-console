import { resetUpdateTeamStatus } from './../teams.actions';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../teams.model';
import { updateTeamData } from '../teams.actions';
import { KeyValue } from '@angular/common';
import { User } from '@app/login/login.model';
import { Observable } from 'rxjs';
import { Loadable } from '@app/shared/shared.reducer';
import { MatSnackBar } from '@angular/material';
import { selectUpdateTeamDataStatus } from './../teams.reducer';
import { ValidatorPattern } from '@app/shared/shared.model';

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

  updateTeamDataStatus$: Observable<Loadable> = this.store.select(selectUpdateTeamDataStatus);

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.dispatch(resetUpdateTeamStatus());
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];
    this.teamData = this.route.snapshot.data['team'] as Team;
    this.teamForm = this.formBuilder.group({
      id: this.teamData.id,
      name: [this.teamData.name, Validators.required],
      description: [this.teamData.description, Validators.required],
      cloudIdentityGroup: [this.teamData.cloudIdentityGroup, Validators.pattern(ValidatorPattern.EMAIL)],
      businessUnitId: [this.teamData.businessUnitId, Validators.required]
    });

    this.updateTeamDataStatus$.subscribe(status => this.handleLoading(status));
  }

  get f() {
    return this.teamForm.controls;
  }

  private navigateToTeamsHome() {
    this.router.navigateByUrl('/administration/teams');
  }

  private handleLoading = (status: Loadable) => {
    status.success && this.navigateToTeamsHome();
    status.loading ? this.teamForm.disable() : this.teamForm.enable();
  };

  cancel() {
    this.navigateToTeamsHome();
  }

  onSubmit(teamData) {
    if (this.teamForm.valid) {
      this.store.dispatch(updateTeamData({ teamData }));
    } else {
      this.teamForm.markAllAsTouched();
    }
  }
}
