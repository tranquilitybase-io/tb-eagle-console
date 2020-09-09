import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneDialogDeployEnvEnvironmentErrorComponent } from './landing-zone-dialog-deploy-env-environment-error.component';

describe('LandingZoneDialogDeployEnvComponent', () => {
  let component: LandingZoneDialogDeployEnvEnvironmentErrorComponent;
  let fixture: ComponentFixture<LandingZoneDialogDeployEnvEnvironmentErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneDialogDeployEnvEnvironmentErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneDialogDeployEnvEnvironmentErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
