import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallStatusComponent } from './api-call-status.component';

describe('AppIsDeployedComponent', () => {
  let component: ApiCallStatusComponent;
  let fixture: ComponentFixture<ApiCallStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCallStatusComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCallStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
