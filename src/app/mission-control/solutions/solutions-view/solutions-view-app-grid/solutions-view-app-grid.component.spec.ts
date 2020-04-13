import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsViewAppGridComponent } from './solutions-view-app-grid.component';

describe('SolutionsViewAppGridComponent', () => {
  let component: SolutionsViewAppGridComponent;
  let fixture: ComponentFixture<SolutionsViewAppGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewAppGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsViewAppGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
