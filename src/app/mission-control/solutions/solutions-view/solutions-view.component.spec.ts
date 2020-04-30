import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsViewComponent } from './solutions-view.component';

describe('SolutionsViewComponent', () => {
  let component: SolutionsViewComponent;
  let fixture: ComponentFixture<SolutionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
