import { TestBed } from '@angular/core/testing';

import { SolutionsService } from './solutions.service';

describe('SolutionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolutionsService = TestBed.get(SolutionsService);
    expect(service).toBeTruthy();
  });
});
