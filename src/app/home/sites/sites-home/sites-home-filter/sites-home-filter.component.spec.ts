import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesHomeFilterComponent } from './sites-home-filter.component';

describe('SolutionsHomeListFilterComponent', () => {
  let component: SitesHomeFilterComponent;
  let fixture: ComponentFixture<SitesHomeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SitesHomeFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesHomeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
