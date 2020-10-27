import { selectCreateBusinessUnitsStatus } from './../business-unit.reducer';
import { Component, OnInit } from '@angular/core';
import { createBusinessUnit } from '../business-unit.actions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-business-unit-create',
  templateUrl: './business-unit-create.component.html',
  styleUrls: ['./business-unit-create.component.scss']
})
export class BusinessUnitCreateComponent implements OnInit {
  businessForm: FormGroup;

  createBusinessUnitStatus$: Observable<Loadable> = this.store.select(selectCreateBusinessUnitsStatus);

  constructor(private store: Store<any>, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.businessForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      description: ['', Validators.required],
      isActive: [true, Validators.required]
    });

    this.createBusinessUnitStatus$.subscribe(status => this.handleLoading(status));
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
      this.store.dispatch(createBusinessUnit({ businessUnit }));
    } else {
      this.businessForm.markAllAsTouched();
    }
  }
}
