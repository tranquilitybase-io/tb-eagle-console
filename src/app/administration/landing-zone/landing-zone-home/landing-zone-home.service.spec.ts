import { TestBed } from '@angular/core/testing';

import { LandingZoneHomeService } from './landing-zone-home.service';

describe('LandingZoneHomeGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: LandingZoneHomeService = TestBed.get(LandingZoneHomeService);
    expect(service).toBeTruthy();
  });
});
