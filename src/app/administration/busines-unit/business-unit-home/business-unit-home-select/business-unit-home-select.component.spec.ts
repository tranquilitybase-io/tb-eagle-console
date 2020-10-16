import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitHomeSelectComponent } from './business-unit-home-select.component';

describe('UsersHomeSelectComponent', () => {
  let component: BusinessUnitHomeSelectComponent;
  let fixture: ComponentFixture<BusinessUnitHomeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitHomeSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitHomeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
