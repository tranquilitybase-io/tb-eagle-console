import { TestBed } from '@angular/core/testing';

import { SolutionsService } from './solutions.service';

describe('SolutionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: SolutionsService = TestBed.get(SolutionsService);
    expect(service).toBeTruthy();
  });
});
