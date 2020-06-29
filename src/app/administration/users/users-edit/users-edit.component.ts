import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '@app/login/login.model';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidatorPattern } from '@app/shared/shared.model';
import { updateUserData } from '../users.actions';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['user'] as User;

    this.userForm = this.formBuilder.group({
      id: this.user.id,
      isActive: true,
      name: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.pattern(ValidatorPattern.EMAIL)]]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit(userData) {
    if (this.userForm.valid) {
      this.store.dispatch(updateUserData({ userData }));
      // this.userForm.value
      this.router.navigateByUrl('/administration/users');
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
