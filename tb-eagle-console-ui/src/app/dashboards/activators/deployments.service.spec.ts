import { TestBed } from "@angular/core/testing";

import { DeployementsService } from "./deployements.service";

describe("DeployementsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DeployementsService = TestBed.get(DeployementsService);
    expect(service).toBeTruthy();
  });
});
