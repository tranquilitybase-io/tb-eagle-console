import { selectCreateTeamDataStatus } from './../teams.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@app/login/login.model';
import { createTeamData, resetCreateTeamDataStatus } from '../teams.actions';
import { Loadable } from '@app/shared/shared.reducer';
import { MatSnackBar } from '@angular/material';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';
import { ValidatorPattern } from '@app/shared/shared.model';

@Component({
  selector: 'app-teams-create',
  templateUrl: './teams-create.component.html',
  styleUrls: ['./teams-create.component.scss']
})
export class TeamsCreateComponent implements OnInit {
  teamForm: FormGroup;
  teamMembersForm: FormGroup;
  users: User[];

  businessUnitList: KeyValue<string, string>[];

  createTeamDataStatus$: Observable<Loadable>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.dispatch(resetCreateTeamDataStatus());
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];

    this.teamForm = this.formBuilder.group({
      id: 0,
      isActive: true,
      name: ['', Validators.required],
      description: ['', Validators.required],
      cloudIdentityGroup: ['', Validators.pattern(ValidatorPattern.EMAIL)],
      businessUnitId: ['', Validators.required]
    });

    this.createTeamDataStatus$ = this.store.pipe(select(selectCreateTeamDataStatus));
    this.createTeamDataStatus$.subscribe(status => {
      this.handleSubmitStatus(status);
    });
  }

  private navigateToTeamsHome() {
    this.router.navigateByUrl('/administration/teams');
  }

  private handleSubmitStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Team has been created', success: true },
        duration: 3500
      });
      this.navigateToTeamsHome();
    } else if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. Team has not been created', success: false },
        duration: 3500
      });
      this.navigateToTeamsHome();
    }
  }

  get f() {
    return this.teamForm.controls;
  }

  cancel() {
    this.navigateToTeamsHome();
  }

  onSubmit(teamData) {
    if (this.teamForm.valid) {
      this.store.dispatch(createTeamData({ teamData }));
    } else {
      this.teamForm.markAllAsTouched();
    }
  }
}
