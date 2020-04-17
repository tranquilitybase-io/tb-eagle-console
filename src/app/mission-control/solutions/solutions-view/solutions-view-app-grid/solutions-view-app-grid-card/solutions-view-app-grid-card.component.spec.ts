import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsViewAppGridCardComponent } from './solutions-view-app-grid-card.component';

describe('SolutionsViewAppGridCardComponent', () => {
  let component: SolutionsViewAppGridCardComponent;
  let fixture: ComponentFixture<SolutionsViewAppGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewAppGridCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsViewAppGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
