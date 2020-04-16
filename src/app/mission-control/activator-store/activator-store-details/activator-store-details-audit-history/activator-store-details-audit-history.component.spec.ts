import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsAuditHistoryComponent } from './activator-store-details-audit-history.component';

describe('ActivatorStoreDetailsAuditHistoryComponent', () => {
  let component: ActivatorStoreDetailsAuditHistoryComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsAuditHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsAuditHistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDetailsAuditHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
