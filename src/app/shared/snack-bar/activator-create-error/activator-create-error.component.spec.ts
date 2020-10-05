import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorCreateErrorComponent } from './activator-create-error.component';

describe('AppUnderDeploymentComponent', () => {
  let component: ActivatorCreateErrorComponent;
  let fixture: ComponentFixture<ActivatorCreateErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorCreateErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorCreateErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
