import { updateBusinessUnit } from './../business-unit.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessUnit } from '../business-unit.model';

@Component({
  selector: 'app-business-unit-edit',
  templateUrl: './business-unit-edit.component.html',
  styleUrls: ['./business-unit-edit.component.scss']
})
export class BusinessUnitEditComponent implements OnInit {
  businessForm: FormGroup;
  businessUnit: BusinessUnit;

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.businessUnit = this.route.snapshot.data['businessUnit'] as BusinessUnit;

    this.businessForm = this.formBuilder.group({
      id: this.businessUnit.id,
      name: [this.businessUnit.name, Validators.required],
      description: [this.businessUnit.description, Validators.required],
      isActive: [this.businessUnit.isActive, Validators.required]
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
      this.store.dispatch(updateBusinessUnit({ businessUnit }));
      this.router.navigateByUrl('/administration/business-unit');
    } else {
      this.businessForm.markAllAsTouched();
    }
  }
}
