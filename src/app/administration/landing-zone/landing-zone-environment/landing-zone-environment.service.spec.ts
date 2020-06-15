import { TestBed } from '@angular/core/testing';

import { LandingZoneEnvironmentService } from './landing-zone-environment.service';

describe('LandingZoneEnvironmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: LandingZoneEnvironmentService = TestBed.get(LandingZoneEnvironmentService);
    expect(service).toBeTruthy();
  });
});
