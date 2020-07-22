import { TestBed } from '@angular/core/testing';

import { TeamMembersService } from './team-members.service';

describe('TeamMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: TeamMembersService = TestBed.get(TeamMembersService);
    expect(service).toBeTruthy();
  });
});
