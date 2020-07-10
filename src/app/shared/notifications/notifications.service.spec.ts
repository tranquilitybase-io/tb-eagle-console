import { TestBed } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: NotificationsService = TestBed.get(NotificationsService);
    expect(service).toBeTruthy();
  });
});
