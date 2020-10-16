import { Component, OnInit } from '@angular/core';
import { createBusinessUnit } from '../business-unit.actions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidatorPattern } from '@app/shared/shared.model';
import { User } from '@app/login/login.model';

@Component({
  selector: 'app-business-unit-create',
  templateUrl: './business-unit-create.component.html',
  styleUrls: ['./business-unit-create.component.scss']
})
export class BusinessUnitCreateComponent implements OnInit {
  businessForm: FormGroup;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.businessForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      description: ['', Validators.required],
      isActive: [true, Validators.required]
    });
  }

  get f() {
    return this.businessForm.controls;
  }

  cancel() {
    this.router.navigateByUrl('/administration/business-unit');
  }

  onSubmit(businessUnit) {
    if (this.businessForm.valid) {
      this.store.dispatch(createBusinessUnit({ businessUnit }));
      this.router.navigateByUrl('/administration/business-unit');
    } else {
      this.businessForm.markAllAsTouched();
    }
  }
}
