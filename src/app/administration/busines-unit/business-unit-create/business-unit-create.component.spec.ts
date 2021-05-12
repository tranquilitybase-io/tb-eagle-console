import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitCreateComponent } from './business-unit-create.component';

describe('UsersCreateComponent', () => {
  let component: BusinessUnitCreateComponent;
  let fixture: ComponentFixture<BusinessUnitCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUnitCreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
