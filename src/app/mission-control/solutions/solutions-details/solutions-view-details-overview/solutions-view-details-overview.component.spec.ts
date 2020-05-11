import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsVieweDetailsOverviewComponent } from '.solutions-view-details-overview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('SolutionsViewDetailsOverviewComponent', () => {
  let component: SolutionsVieweDetailsOverviewComponent;
  let fixture: ComponentFixture<SolutionsVieweDetailsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsVieweDetailsOverviewComponent],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsVieweDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
