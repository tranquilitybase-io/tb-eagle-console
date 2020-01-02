import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewSwitchComponent } from './grid-view-switch.component';

describe('GridViewSwitchComponent', () => {
  let component: GridViewSwitchComponent;
  let fixture: ComponentFixture<GridViewSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridViewSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
