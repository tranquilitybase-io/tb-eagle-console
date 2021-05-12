import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreViewBillingComponent } from './activator-store-view-billing.component';

describe('ActivatorStoreViewBillingComponent', () => {
  let component: ActivatorStoreViewBillingComponent;
  let fixture: ComponentFixture<ActivatorStoreViewBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreViewBillingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreViewBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
