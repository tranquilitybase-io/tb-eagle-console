import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsHomeComponent } from './solutions-home.component';

describe('SolutionsHomeComponent', () => {
  let component: SolutionsHomeComponent;
  let fixture: ComponentFixture<SolutionsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
