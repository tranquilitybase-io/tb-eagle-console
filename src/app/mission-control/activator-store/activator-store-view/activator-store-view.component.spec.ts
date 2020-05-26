import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreViewComponent } from './activator-store-view.component';
import { ActivatorStoreViewAuditHistoryComponent } from './activator-store-view-audit-history/activator-store-view-audit-history.component';
import { ActivatorStoreViewBillingComponent } from './activator-store-view-billing/activator-store-view-billing.component';
import { ActivatorStoreViewUsersComponent } from './activator-store-view-users/activator-store-view-users.component';
import { ActivatorStoreViewVersionHistoryComponent } from './activator-store-view-version-history/activator-store-view-version-history.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('ActivatorStoreViewComponent', () => {
  let component: ActivatorStoreViewComponent;
  let fixture: ComponentFixture<ActivatorStoreViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivatorStoreViewAuditHistoryComponent,
        ActivatorStoreViewBillingComponent,
        ActivatorStoreViewComponent,
        ActivatorStoreViewUsersComponent,
        ActivatorStoreViewVersionHistoryComponent
      ],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
