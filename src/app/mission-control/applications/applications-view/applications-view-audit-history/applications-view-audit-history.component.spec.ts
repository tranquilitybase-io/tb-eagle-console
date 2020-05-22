import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsViewAuditHistoryComponent } from './applications-view-audit-history.component';

describe('ApplicationsViewAuditHistoryComponent', () => {
  let component: ApplicationsViewAuditHistoryComponent;
  let fixture: ComponentFixture<ApplicationsViewAuditHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsViewAuditHistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsViewAuditHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
