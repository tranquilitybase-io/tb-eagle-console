import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneEnvironmentComponent } from './landing-zone-environment.component';

describe('LandingZoneEnvironmentComponent', () => {
  let component: LandingZoneEnvironmentComponent;
  let fixture: ComponentFixture<LandingZoneEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneEnvironmentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
