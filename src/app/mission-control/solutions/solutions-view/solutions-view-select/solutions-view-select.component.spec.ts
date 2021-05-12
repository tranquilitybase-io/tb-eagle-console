import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsViewSelectComponent } from './solutions-view-select.component';

describe('SolutionsViewSelectComponent', () => {
  let component: SolutionsViewSelectComponent;
  let fixture: ComponentFixture<SolutionsViewSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewSelectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsViewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
