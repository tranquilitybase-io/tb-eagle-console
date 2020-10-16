import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitEditComponent } from './business-unit-edit.component';

describe('UsersEditComponent', () => {
  let component: BusinessUnitEditComponent;
  let fixture: ComponentFixture<BusinessUnitEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
