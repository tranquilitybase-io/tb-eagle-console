import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreEditComponent } from './activator-store-edit.component';

describe('SolutionsCreateComponent', () => {
  let component: ActivatorStoreEditComponent;
  let fixture: ComponentFixture<ActivatorStoreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
