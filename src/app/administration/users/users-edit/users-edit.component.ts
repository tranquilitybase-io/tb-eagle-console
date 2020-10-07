import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '@app/login/login.model';
import { select, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidatorPattern } from '@app/shared/shared.model';
import { updateUserData } from '../users.actions';
import { Loadable } from '@app/mission-control/activator-store/activator-store.reducer';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';
import { MatSnackBar } from '@angular/material';
import { selectUpdateUserDataStatus } from '../users.reducer';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  createUserDataStatus$: Observable<Loadable>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['user'] as User;

    this.userForm = this.formBuilder.group({
      id: this.user.id,
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.pattern(ValidatorPattern.EMAIL)]]
    });

    this.createUserDataStatus$ = this.store.pipe(select(selectUpdateUserDataStatus));
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
        data: { message: 'User has been updated', success: true },
        duration: 3500
      });
      this.navigateToUsersHome();
    } else if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. User has not been updated', success: false },
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
      this.store.dispatch(updateUserData({ userData }));
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
