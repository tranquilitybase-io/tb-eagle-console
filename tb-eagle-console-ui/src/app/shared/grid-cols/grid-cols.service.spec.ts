import { TestBed } from '@angular/core/testing';

import { GridColsService } from './grid-cols.service';

describe('GridColsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridColsService = TestBed.get(GridColsService);
    expect(service).toBeTruthy();
  });
});
