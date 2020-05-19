import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsDetailsAuditHistoryComponent } from './solutions-details-audit-history/solutions-details-audit-history.component';
import { SolutionsDetailsBillingComponent } from './solutions-details-billing/solutions-details-billing.component';
import { SolutionsDetailsComponent } from './solutions-details.component';
import { SolutionsDetailsUsersComponent } from './solutions-details-users/solutions-details-users.component';
import { SolutionsDetailsVersionHistoryComponent } from './solutions-details-version-history/solutions-details-version-history.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('SolutionsDetailsComponent', () => {
  let component: SolutionsDetailsComponent;
  let fixture: ComponentFixture<SolutionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SolutionsDetailsAuditHistoryComponent,
        SolutionsDetailsBillingComponent,
        SolutionsDetailsComponent,
        SolutionsDetailsUsersComponent,
        SolutionsDetailsVersionHistoryComponent
      ],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
