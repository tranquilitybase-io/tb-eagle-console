import { selectCreateTeamDataStatus } from './../teams.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@app/login/login.model';
import { createTeamData } from '../teams.actions';
import { Loadable } from '@app/shared/shared.reducer';
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

  createTeamDataStatus$: Observable<Loadable> = this.store.select(selectCreateTeamDataStatus);

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];

    this.teamForm = this.formBuilder.group({
      id: 0,
      isActive: true,
      name: ['', Validators.required],
      description: ['', Validators.required],
      cloudIdentityGroup: ['', Validators.pattern(ValidatorPattern.EMAIL)],
      businessUnitId: ['', Validators.required]
    });

    this.createTeamDataStatus$.subscribe(status => this.handleLoading(status));
  }

  private navigateToTeamsHome() {
    this.router.navigateByUrl('/administration/teams');
  }

  private handleLoading = (status: Loadable) => {
    status.success && this.navigateToTeamsHome();
    status.loading ? this.teamForm.disable() : this.teamForm.enable();
  };

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
