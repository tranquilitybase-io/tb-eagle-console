import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsDialogDeployComponent } from './applications-dialog-deploy.component';

describe('LandingZoneDialogDeployEnvComponent', () => {
  let component: ApplicationsDialogDeployComponent;
  let fixture: ComponentFixture<ApplicationsDialogDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsDialogDeployComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsDialogDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
