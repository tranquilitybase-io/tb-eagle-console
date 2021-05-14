import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });
});
