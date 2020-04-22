import { TestBed } from '@angular/core/testing';

import { DeploymentsService } from './deployments.service';

describe('DeploymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeploymentsService = TestBed.get(DeploymentsService);
    expect(service).toBeTruthy();
  });
});
