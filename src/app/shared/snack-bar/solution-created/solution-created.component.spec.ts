import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCreatedComponent } from './solution-created.component';

describe('SolutionCreatedComponent', () => {
  let component: SolutionCreatedComponent;
  let fixture: ComponentFixture<SolutionCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionCreatedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
