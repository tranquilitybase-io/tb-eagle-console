import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreCreateComponent } from './activator-store-create.component';

describe('SolutionsCreateComponent', () => {
  let component: ActivatorStoreCreateComponent;
  let fixture: ComponentFixture<ActivatorStoreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreCreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
