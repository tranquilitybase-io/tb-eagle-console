import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySwitchComponent } from './category-switch.component';

describe('CategorySwitchComponent', () => {
  let component: CategorySwitchComponent;
  let fixture: ComponentFixture<CategorySwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategorySwitchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
