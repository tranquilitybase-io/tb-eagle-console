import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDetailsComponent } from './solutions-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { SolutionDetailsAuditHistoryComponent } from './solutions-details-audit-history/solutions-details-audit-history.component';
import { SolutionDetailsVersionHistoryComponent } from './solutions-details-version-history/solutions-details-version-history.component';
import { SolutionDetailsUsersComponent } from './solutions-details-users/solutions-details-users.component';
import { SolutionDetailsBillingComponent } from './solutions-details-billing/solutions-details-billing.component';

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
