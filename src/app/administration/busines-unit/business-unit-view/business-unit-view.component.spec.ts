import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitViewComponent } from './business-unit-view.component';

describe('UsersViewComponent', () => {
  let component: BusinessUnitViewComponent;
  let fixture: ComponentFixture<BusinessUnitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
