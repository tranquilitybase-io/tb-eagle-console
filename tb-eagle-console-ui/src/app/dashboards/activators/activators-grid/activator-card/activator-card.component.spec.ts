import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorCardComponent } from './activator-card.component';

describe('ActivatorCardComponent', () => {
  let component: ActivatorCardComponent;
  let fixture: ComponentFixture<ActivatorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
