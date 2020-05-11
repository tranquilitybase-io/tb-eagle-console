import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDetailsComponent } from './activator-store-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { SolutionDetailsAuditHistoryComponent } from './activator-store-details-audit-history/activator-store-details-audit-history.component';
import { SolutionDetailsVersionHistoryComponent } from './activator-store-details-version-history/activator-store-details-version-history.component';
import { SolutionDetailsUsersComponent } from './activator-store-details-users/activator-store-details-users.component';
import { SolutionDetailsBillingComponent } from './activator-store-details-billing/activator-store-details-billing.component';

describe('SolutionDetailsComponent', () => {
  let component: SolutionDetailsComponent;
  let fixture: ComponentFixture<SolutionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SolutionDetailsComponent,
        SolutionDetailsAuditHistoryComponent,
        SolutionDetailsVersionHistoryComponent,
        SolutionDetailsUsersComponent,
        SolutionDetailsBillingComponent
      ],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
