import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitHomeFilterComponent } from './business-unit-home-filter.component';

describe('SolutionsHomeListFilterComponent', () => {
  let component: BusinessUnitHomeFilterComponent;
  let fixture: ComponentFixture<BusinessUnitHomeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitHomeFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitHomeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
