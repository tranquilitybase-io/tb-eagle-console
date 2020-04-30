import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIsDeployedComponent } from './app-is-deployed.component';

describe('AppIsDeployedComponent', () => {
  let component: AppIsDeployedComponent;
  let fixture: ComponentFixture<AppIsDeployedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppIsDeployedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIsDeployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
