import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsViewBillingComponent } from './applications-view-billing.component';

describe('ApplicationsViewBillingComponent', () => {
  let component: ApplicationsViewBillingComponent;
  let fixture: ComponentFixture<ApplicationsViewBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsViewBillingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsViewBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
