import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitHomeListComponent } from './business-unit-home-list.component';

describe('UsersHomeListComponent', () => {
  let component: BusinessUnitHomeListComponent;
  let fixture: ComponentFixture<BusinessUnitHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitHomeListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
