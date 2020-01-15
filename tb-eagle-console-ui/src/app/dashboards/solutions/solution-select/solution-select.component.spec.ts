import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SolutionSelectComponent } from "./solution-select.component";

describe("SolutionSelectComponent", () => {
  let component: SolutionSelectComponent;
  let fixture: ComponentFixture<SolutionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
