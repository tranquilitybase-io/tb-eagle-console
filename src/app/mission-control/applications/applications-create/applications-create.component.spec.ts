import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsCreateComponent } from './applications-create.component';

describe('ApplicationsCreateComponent', () => {
  let component: ApplicationsCreateComponent;
  let fixture: ComponentFixture<ApplicationsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsCreateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
