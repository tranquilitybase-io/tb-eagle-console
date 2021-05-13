import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitHomeGridComponent } from './business-unit-home-grid.component';

describe('UsersHomeGridComponent', () => {
  let component: BusinessUnitHomeGridComponent;
  let fixture: ComponentFixture<BusinessUnitHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitHomeGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
