import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionLandingGridCardComponent } from './solution-landing-grid-card.component';

describe('SolutionLandingGridCardComponent', () => {
  let component: SolutionLandingGridCardComponent;
  let fixture: ComponentFixture<SolutionLandingGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionLandingGridCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionLandingGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
