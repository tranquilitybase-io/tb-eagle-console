import { TestBed } from '@angular/core/testing';

import { ActivatorStoreService } from './activator-store.service';

describe('ActivatorStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivatorStoreService = TestBed.get(ActivatorStoreService);
    expect(service).toBeTruthy();
  });
});
