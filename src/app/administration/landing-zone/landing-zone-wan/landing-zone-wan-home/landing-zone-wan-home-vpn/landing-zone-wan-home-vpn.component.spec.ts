import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanHomeVpnComponent } from './landing-zone-wan-home-vpn.component';

describe('LandingZoneWanHomeVpnComponent', () => {
  let component: LandingZoneWanHomeVpnComponent;
  let fixture: ComponentFixture<LandingZoneWanHomeVpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanHomeVpnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanHomeVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
