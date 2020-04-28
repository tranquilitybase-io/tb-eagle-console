import { TestBed } from '@angular/core/testing';

import { LandingZoneService } from './landing-zone.service';

describe('LandingZoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: LandingZoneService = TestBed.get(LandingZoneService);
    expect(service).toBeTruthy();
  });
});
