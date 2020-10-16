import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitsHomeComponent } from './business-unit-home.component';

describe('UsersHomeComponent', () => {
  let component: BusinessUnitsHomeComponent;
  let fixture: ComponentFixture<BusinessUnitsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitsHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
