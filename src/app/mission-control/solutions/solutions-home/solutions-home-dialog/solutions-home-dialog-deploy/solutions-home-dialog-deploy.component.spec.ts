import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsHomeDialogDeployComponent } from './solutions-home-dialog-deploy.component';

describe('LandingZoneDialogDeployEnvComponent', () => {
  let component: SolutionsHomeDialogDeployComponent;
  let fixture: ComponentFixture<SolutionsHomeDialogDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsHomeDialogDeployComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsHomeDialogDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
