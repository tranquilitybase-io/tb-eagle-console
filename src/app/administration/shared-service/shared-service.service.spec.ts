import { TestBed } from '@angular/core/testing';

import { SharedServiceService } from './shared-service.service';

describe('SharedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: SharedServiceService = TestBed.get(SharedServiceService);
    expect(service).toBeTruthy();
  });
});
