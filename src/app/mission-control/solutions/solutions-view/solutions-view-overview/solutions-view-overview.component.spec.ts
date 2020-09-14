import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsViewOverviewComponent } from './solutions-view-overview.component';

describe('SolutionsViewOverviewComponent', () => {
  let component: SolutionsViewOverviewComponent;
  let fixture: ComponentFixture<SolutionsViewOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewOverviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsViewOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
