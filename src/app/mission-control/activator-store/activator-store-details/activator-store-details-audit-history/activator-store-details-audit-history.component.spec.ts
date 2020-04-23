import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsAuditHistoryComponent } from './activator-store-details-audit-history.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('ActivatorStoreDetailsAuditHistoryComponent', () => {
  let component: ActivatorStoreDetailsAuditHistoryComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsAuditHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsAuditHistoryComponent],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
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
