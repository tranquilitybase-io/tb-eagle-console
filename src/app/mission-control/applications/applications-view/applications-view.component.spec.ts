import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsViewComponent } from './applications-view.component';
import { ApplicationsViewAuditHistoryComponent } from './applications-view-audit-history/applications-view-audit-history.component';
import { ApplicationsViewBillingComponent } from './applications-view-billing/applications-view-billing.component';
import { ApplicationsViewUsersComponent } from './applications-view-users/applications-view-users.component';
import { ApplicationsViewVersionHistoryComponent } from './applications-view-version-history/applications-view-version-history.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('ApplicationsViewComponent', () => {
  let component: ApplicationsViewComponent;
  let fixture: ComponentFixture<ApplicationsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplicationsViewAuditHistoryComponent,
        ApplicationsViewBillingComponent,
        ApplicationsViewComponent,
        ApplicationsViewUsersComponent,
        ApplicationsViewVersionHistoryComponent,
      ],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
