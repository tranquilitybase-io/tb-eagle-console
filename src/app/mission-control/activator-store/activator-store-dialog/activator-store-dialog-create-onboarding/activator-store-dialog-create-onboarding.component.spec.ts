import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDialogCreateOnboardingComponent } from './activator-store-dialog-create-onboarding.component';

describe('ActivatorStoreDialogGrantAccessComponent', () => {
  let component: ActivatorStoreDialogCreateOnboardingComponent;
  let fixture: ComponentFixture<ActivatorStoreDialogCreateOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDialogCreateOnboardingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDialogCreateOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
