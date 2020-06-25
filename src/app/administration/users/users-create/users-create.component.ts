import { Component, OnInit } from '@angular/core';
import { storeUserData } from '../users.actions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../users.model';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidatorPattern } from '@app/shared/shared.model';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  userForm: FormGroup;
  users: User[];

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: 0,
      isActive: true,
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(ValidatorPattern.EMAIL)]]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit(userData) {
    if (this.userForm.valid) {
      this.store.dispatch(storeUserData({ userData }));
      this.router.navigateByUrl('/administration/users');
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
