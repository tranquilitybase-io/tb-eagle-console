import { TestBed } from '@angular/core/testing';

import { ActivatorStoreService } from './activator-store.service';

describe('ActivatorStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ActivatorStoreService = TestBed.get(ActivatorStoreService);
    expect(service).toBeTruthy();
  });
});
