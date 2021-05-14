import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsHomeFilterComponent } from './teams-home-filter.component';

describe('SolutionsHomeListFilterComponent', () => {
  let component: TeamsHomeFilterComponent;
  let fixture: ComponentFixture<TeamsHomeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsHomeFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsHomeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
