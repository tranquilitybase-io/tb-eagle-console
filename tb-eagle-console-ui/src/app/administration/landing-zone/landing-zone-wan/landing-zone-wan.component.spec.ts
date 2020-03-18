import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanComponent } from './landing-zone-wan.component';

describe('LandingZoneWanComponent', () => {
  let component: LandingZoneWanComponent;
  let fixture: ComponentFixture<LandingZoneWanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
