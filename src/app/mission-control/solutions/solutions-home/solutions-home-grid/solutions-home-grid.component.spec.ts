import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsHomeGridComponent } from './solutions-home-grid.component';

describe('SolutionsHomeGridComponent', () => {
  let component: SolutionsHomeGridComponent;
  let fixture: ComponentFixture<SolutionsHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsHomeGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
