import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanDirectComponent } from './landing-zone-wan-direct.component';

describe('LandingZoneWanDirectComponent', () => {
  let component: LandingZoneWanDirectComponent;
  let fixture: ComponentFixture<LandingZoneWanDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanDirectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
