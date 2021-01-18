import { TestBed } from '@angular/core/testing';

import { SharedServicesHomeService } from './shared-services-home.service';

describe('SharedServicesHomeGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: SharedServicesHomeService = TestBed.get(SharedServicesHomeService);
    expect(service).toBeTruthy();
  });
});
