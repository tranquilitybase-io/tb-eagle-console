import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '@app/login/login.model';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidatorPattern } from '@app/shared/shared.model';
import { updateUserData, resetUpdateDataStatus } from '../users.actions';
import { Loadable } from '@app/shared/shared.reducer';
import { selectUpdateUserDataStatus } from '../users.reducer';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  updateUserDataStatus$: Observable<Loadable> = this.store.select(selectUpdateUserDataStatus);

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.store.dispatch(resetUpdateDataStatus());
    this.user = this.route.snapshot.data['user'] as User;

    this.userForm = this.formBuilder.group({
      id: this.user.id,
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.pattern(ValidatorPattern.EMAIL)]]
    });
    this.updateUserDataStatus$.subscribe(status => this.handleLoading(status));
  }

  private navigateToUsersHome() {
    this.router.navigateByUrl('/administration/users');
  }

  private handleLoading = (status: Loadable) => {
    status.success && this.navigateToUsersHome();
    status.loading ? this.userForm.disable() : this.userForm.enable();
  };

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
