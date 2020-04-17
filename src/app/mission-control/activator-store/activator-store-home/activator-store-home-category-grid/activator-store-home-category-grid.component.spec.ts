import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreHomeCategoryGridComponent } from './activator-store-home-category-grid.component';

describe('ActivatorStoreHomeCategoryGridComponent', () => {
  let component: ActivatorStoreHomeCategoryGridComponent;
  let fixture: ComponentFixture<ActivatorStoreHomeCategoryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreHomeCategoryGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreHomeCategoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
