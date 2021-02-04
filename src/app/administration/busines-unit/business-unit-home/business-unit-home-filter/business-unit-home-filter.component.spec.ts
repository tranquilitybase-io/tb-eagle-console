import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesUnitHomeFilterComponent } from './business-unit-home-filter.component';

describe('SolutionsHomeListFilterComponent', () => {
  let component: BusinesUnitHomeFilterComponent;
  let fixture: ComponentFixture<BusinesUnitHomeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinesUnitHomeFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesUnitHomeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
