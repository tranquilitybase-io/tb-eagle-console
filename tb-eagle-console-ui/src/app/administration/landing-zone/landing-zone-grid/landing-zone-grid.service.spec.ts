import { TestBed } from '@angular/core/testing';

import { LandingZoneGridService } from './landing-zone-grid.service';

describe('LandingZoneGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingZoneGridService = TestBed.get(LandingZoneGridService);
    expect(service).toBeTruthy();
  });
});
