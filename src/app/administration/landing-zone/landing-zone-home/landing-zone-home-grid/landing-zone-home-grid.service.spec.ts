import { TestBed } from '@angular/core/testing';

import { LandingZoneHomeGridService } from './landing-zone-home-grid.service';

describe('LandingZoneHomeGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: LandingZoneHomeGridService = TestBed.get(LandingZoneHomeGridService);
    expect(service).toBeTruthy();
  });
});
