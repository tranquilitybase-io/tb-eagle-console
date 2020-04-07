import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionLandingGridComponent } from './solution-landing-grid.component';

describe('SolutionLandingGridComponent', () => {
  let component: SolutionLandingGridComponent;
  let fixture: ComponentFixture<SolutionLandingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionLandingGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionLandingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
