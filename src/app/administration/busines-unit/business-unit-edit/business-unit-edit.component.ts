import { updateBusinessUnit, resetUpdateBusinessUnitStatus } from './../business-unit.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessUnit } from '../business-unit.model';
import { Observable } from 'rxjs';
import { Loadable } from '@app/shared/shared.reducer';
import { selectUpdateBusinessUnitsStatus } from '../business-unit.reducer';

@Component({
  selector: 'app-business-unit-edit',
  templateUrl: './business-unit-edit.component.html',
  styleUrls: ['./business-unit-edit.component.scss']
})
export class BusinessUnitEditComponent implements OnInit {
  businessForm: FormGroup;
  businessUnit: BusinessUnit;

  updateBusinessUnitStatus$: Observable<Loadable> = this.store.select(selectUpdateBusinessUnitsStatus);

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.store.dispatch(resetUpdateBusinessUnitStatus());
    this.businessUnit = this.route.snapshot.data['businessUnit'] as BusinessUnit;

    this.businessForm = this.formBuilder.group({
      id: this.businessUnit.id,
      name: [this.businessUnit.name, Validators.required],
      description: [this.businessUnit.description, Validators.required],
      isActive: [this.businessUnit.isActive, Validators.required]
    });
    this.updateBusinessUnitStatus$.subscribe(status => this.handleLoading(status));
  }

  private navigateToBusinessUnitHome() {
    this.router.navigateByUrl('/administration/business-unit');
  }

  private handleLoading = (status: Loadable) => {
    status.success && this.navigateToBusinessUnitHome();
    status.loading ? this.businessForm.disable() : this.businessForm.enable();
  };

  get f() {
    return this.businessForm.controls;
  }

  cancel() {
    this.navigateToBusinessUnitHome();
  }

  onSubmit(businessUnit) {
    if (this.businessForm.valid) {
      this.store.dispatch(updateBusinessUnit({ businessUnit }));
    } else {
      this.businessForm.markAllAsTouched();
    }
  }
}
