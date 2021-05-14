import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { createUserData, resetCreateUserDataStatus } from '../users.actions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ValidatorPattern } from '@app/shared/shared.model';
import { Loadable } from '@app/shared/shared.reducer';
import { selectCreateUserDataStatus } from '../users.reducer';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss'],
})
export class UsersCreateComponent implements OnInit {
  userForm: FormGroup;
  createUserDataStatus$: Observable<Loadable> = this.store.select(selectCreateUserDataStatus);

  constructor(private store: Store<any>, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.store.dispatch(resetCreateUserDataStatus());
    this.userForm = this.formBuilder.group({
      id: 0,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(ValidatorPattern.EMAIL)]],
    });
    this.createUserDataStatus$.subscribe((status) => this.handleLoading(status));
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
      this.store.dispatch(createUserData({ userData }));
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
