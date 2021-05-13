import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionUnderCreationComponent } from './solution-under-creation.component';

describe('SolutionUnderCreationComponent', () => {
  let component: SolutionUnderCreationComponent;
  let fixture: ComponentFixture<SolutionUnderCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionUnderCreationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionUnderCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
