import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanHomeVPNComponent } from './landing-zone-wan-home-vpn.component';

describe('LandingZoneWanHomeVPNComponent', () => {
  let component: LandingZoneWanHomeVPNComponent;
  let fixture: ComponentFixture<LandingZoneWanHomeVPNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanHomeVPNComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanHomeVPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
