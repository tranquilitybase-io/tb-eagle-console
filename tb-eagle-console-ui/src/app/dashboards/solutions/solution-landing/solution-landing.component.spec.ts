import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionLandingComponent } from './solution-landing.component';

describe('SolutionLandingComponent', () => {
  let component: SolutionLandingComponent;
  let fixture: ComponentFixture<SolutionLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionLandingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
