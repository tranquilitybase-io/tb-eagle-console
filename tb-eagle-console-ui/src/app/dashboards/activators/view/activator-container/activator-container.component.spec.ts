import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorContainerComponent } from './activator-container.component';

describe('ActivatorContainerComponent', () => {
  let component: ActivatorContainerComponent;
  let fixture: ComponentFixture<ActivatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
