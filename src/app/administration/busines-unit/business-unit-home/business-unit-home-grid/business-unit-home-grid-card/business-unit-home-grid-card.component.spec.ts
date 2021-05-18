import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitHomeGridCardComponent } from './business-unit-home-grid-card.component';

describe('UsersHomeGridCardComponent', () => {
  let component: BusinessUnitHomeGridCardComponent;
  let fixture: ComponentFixture<BusinessUnitHomeGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitHomeGridCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitHomeGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
