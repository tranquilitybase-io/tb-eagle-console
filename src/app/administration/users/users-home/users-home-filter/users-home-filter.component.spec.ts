import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHomeFilterComponent } from './users-home-filter.component';

describe('SolutionsHomeListFilterComponent', () => {
  let component: UsersHomeFilterComponent;
  let fixture: ComponentFixture<UsersHomeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersHomeFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHomeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
