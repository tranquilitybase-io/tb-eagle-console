import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsViewApplicationsComponent } from './solutions-view-applications.component';

describe('SolutionsViewApplicationsComponent', () => {
  let component: SolutionsViewApplicationsComponent;
  let fixture: ComponentFixture<SolutionsViewApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewApplicationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsViewApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
