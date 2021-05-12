import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreViewAuditHistoryComponent } from './activator-store-view-audit-history.component';

describe('ActivatorStoreViewAuditHistoryComponent', () => {
  let component: ActivatorStoreViewAuditHistoryComponent;
  let fixture: ComponentFixture<ActivatorStoreViewAuditHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreViewAuditHistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreViewAuditHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
