import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsComponent } from './activator-store-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatorStoreDetailsOverviewComponent } from './activator-store-details-overview/activator-store-details-overview.component';
import { ActivatorStoreDetailsAuditHistoryComponent } from './activator-store-details-audit-history/activator-store-details-audit-history.component';
import { ActivatorStoreDetailsVersionHistoryComponent } from './activator-store-details-version-history/activator-store-details-version-history.component';
import { ActivatorStoreDetailsUsersComponent } from './activator-store-details-users/activator-store-details-users.component';
import { ActivatorStoreDetailsBillingComponent } from './activator-store-details-billing/activator-store-details-billing.component';

describe('ActivatorStoreDetailsComponent', () => {
  let component: ActivatorStoreDetailsComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivatorStoreDetailsComponent,
        ActivatorStoreDetailsOverviewComponent,
        ActivatorStoreDetailsAuditHistoryComponent,
        ActivatorStoreDetailsVersionHistoryComponent,
        ActivatorStoreDetailsUsersComponent,
        ActivatorStoreDetailsBillingComponent
      ],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
