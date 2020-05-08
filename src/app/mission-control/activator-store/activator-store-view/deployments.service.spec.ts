import { TestBed } from '@angular/core/testing';

import { DeploymentsService } from './deployments.service';

describe('DeployementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: DeploymentsService = TestBed.get(DeploymentsService);
    expect(service).toBeTruthy();
  });
});
