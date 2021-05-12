import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneDialogDeployEnvComponent } from './landing-zone-dialog-deploy-env.component';

describe('LandingZoneDialogDeployEnvComponent', () => {
  let component: LandingZoneDialogDeployEnvComponent;
  let fixture: ComponentFixture<LandingZoneDialogDeployEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneDialogDeployEnvComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneDialogDeployEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
