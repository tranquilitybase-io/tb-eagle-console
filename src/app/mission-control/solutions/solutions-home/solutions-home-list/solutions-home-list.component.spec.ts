import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsHomeListComponent } from './solutions-home-list.component';

describe('SolutionsHomeListComponent', () => {
  let component: SolutionsHomeListComponent;
  let fixture: ComponentFixture<SolutionsHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsHomeListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
