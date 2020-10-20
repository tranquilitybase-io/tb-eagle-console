import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../teams.model';
import { updateTeamData, resetUpdateTeamDataStatus } from '../teams.actions';
import { KeyValue } from '@angular/common';
import { User } from '@app/login/login.model';
import { Observable } from 'rxjs';
import { Loadable } from '@app/shared/shared.reducer';
import { MatSnackBar } from '@angular/material';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';
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

  updateTeamDataStatus$: Observable<Loadable>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.dispatch(resetUpdateTeamDataStatus());
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];
    this.teamData = this.route.snapshot.data['team'] as Team;
    this.teamForm = this.formBuilder.group({
      id: this.teamData.id,
      name: [this.teamData.name, Validators.required],
      description: [this.teamData.description, Validators.required],
      cloudIdentityGroup: [this.teamData.cloudIdentityGroup, Validators.pattern(ValidatorPattern.EMAIL)],
      businessUnitId: [this.teamData.businessUnitId, Validators.required]
    });

    this.updateTeamDataStatus$ = this.store.pipe(select(selectUpdateTeamDataStatus));
    this.updateTeamDataStatus$.subscribe(status => {
      this.handleSubmitStatus(status);
    });
  }

  get f() {
    return this.teamForm.controls;
  }

  private navigateToTeamsHome() {
    this.router.navigateByUrl('/administration/teams');
  }

  private handleSubmitStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Team has been updated', success: true },
        duration: 3500
      });
      this.navigateToTeamsHome();
    } else if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. Team has not been updated', success: false },
        duration: 3500
      });
      this.navigateToTeamsHome();
    }
  }

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
