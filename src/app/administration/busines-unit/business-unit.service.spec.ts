import { TestBed } from '@angular/core/testing';

import { BusinessUnitService } from './business-unit.service';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: BusinessUnitService = TestBed.get(BusinessUnitService);
    expect(service).toBeTruthy();
  });
});
