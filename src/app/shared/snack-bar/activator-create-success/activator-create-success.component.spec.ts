import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorCreateSuccessComponent } from './activator-create-success.component';

describe('AppUnderDeploymentComponent', () => {
  let component: ActivatorCreateSuccessComponent;
  let fixture: ComponentFixture<ActivatorCreateSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorCreateSuccessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorCreateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
