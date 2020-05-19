import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsDetailsAuditHistoryComponent } from './solutions-details-audit-history.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('SolutionsDetailsAuditHistoryComponent', () => {
  let component: SolutionsDetailsAuditHistoryComponent;
  let fixture: ComponentFixture<SolutionsDetailsAuditHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsDetailsAuditHistoryComponent],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsDetailsAuditHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
