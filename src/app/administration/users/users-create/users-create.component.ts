import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { createUserData, resetCreateUserDataStatus } from '../users.actions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ValidatorPattern } from '@app/shared/shared.model';
import { User } from '@app/login/login.model';
import { Loadable } from '@app/shared/shared.reducer';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';
import { MatSnackBar } from '@angular/material';
import { selectCreateUserDataStatus } from '../users.reducer';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  userForm: FormGroup;
  users: User;

  createUserDataStatus$: Observable<Loadable>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.dispatch(resetCreateUserDataStatus());
    this.userForm = this.formBuilder.group({
      id: 0,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(ValidatorPattern.EMAIL)]]
    });
    this.createUserDataStatus$ = this.store.pipe(select(selectCreateUserDataStatus));
    this.createUserDataStatus$.subscribe(status => {
      this.handleSubmitStatus(status);
    });
  }

  private navigateToUsersHome() {
    this.router.navigateByUrl('/administration/users');
  }

  private handleSubmitStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'User has been created', success: true },
        duration: 3500
      });
      this.navigateToUsersHome();
    } else if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. User has not been created', success: false },
        duration: 3500
      });
      this.navigateToUsersHome();
    }
  }

  get f() {
    return this.userForm.controls;
  }

  cancel() {
    this.navigateToUsersHome();
  }

  onSubmit(userData) {
    if (this.userForm.valid) {
      this.store.dispatch(createUserData({ userData }));
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
