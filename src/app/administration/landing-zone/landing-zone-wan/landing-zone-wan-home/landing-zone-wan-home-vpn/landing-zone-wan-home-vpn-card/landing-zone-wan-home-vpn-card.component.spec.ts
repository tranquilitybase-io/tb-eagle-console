import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanHomeVpnCardComponent } from './landing-zone-wan-home-vpn-card.component';

describe('LandingZoneWanHomeVpnCardComponent', () => {
  let component: LandingZoneWanHomeVpnCardComponent;
  let fixture: ComponentFixture<LandingZoneWanHomeVpnCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanHomeVpnCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanHomeVpnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
