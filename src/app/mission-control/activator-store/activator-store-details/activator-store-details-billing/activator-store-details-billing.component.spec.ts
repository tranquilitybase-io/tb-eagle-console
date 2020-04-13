import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsBillingComponent } from './activator-store-details-billing.component';

describe('ActivatorStoreDetailsBillingComponent', () => {
  let component: ActivatorStoreDetailsBillingComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsBillingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDetailsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
