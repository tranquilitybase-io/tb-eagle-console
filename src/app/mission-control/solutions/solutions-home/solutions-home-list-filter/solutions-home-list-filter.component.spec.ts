import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsHomeListFilterComponent } from './solutions-home-list-filter.component';

describe('SolutionsHomeListFilterComponent', () => {
  let component: SolutionsHomeListFilterComponent;
  let fixture: ComponentFixture<SolutionsHomeListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsHomeListFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsHomeListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
