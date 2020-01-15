import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginFormPaneComponent } from "./login-form-pane.component";

describe("LoginFormPaneComponent", () => {
  let component: LoginFormPaneComponent;
  let fixture: ComponentFixture<LoginFormPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormPaneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
