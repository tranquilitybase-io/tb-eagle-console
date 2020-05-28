import { TestBed } from '@angular/core/testing';

import { ApplicationsService } from './applications.service';

describe('ApplicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: ApplicationsService = TestBed.get(ApplicationsService);
    expect(service).toBeTruthy();
  });
});
