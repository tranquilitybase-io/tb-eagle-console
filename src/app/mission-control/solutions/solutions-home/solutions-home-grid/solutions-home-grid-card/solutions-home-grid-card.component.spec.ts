import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsHomeGridCardComponent } from './solutions-home-grid-card.component';

describe('SolutionsHomeGridCardComponent', () => {
  let component: SolutionsHomeGridCardComponent;
  let fixture: ComponentFixture<SolutionsHomeGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsHomeGridCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsHomeGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
