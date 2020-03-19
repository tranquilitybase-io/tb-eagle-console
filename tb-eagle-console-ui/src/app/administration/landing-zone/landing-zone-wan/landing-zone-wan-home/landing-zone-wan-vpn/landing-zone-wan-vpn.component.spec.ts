import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanVPNComponent } from './landing-zone-wan-vpn.component';

describe('LandingZoneWanVPNComponent', () => {
  let component: LandingZoneWanVPNComponent;
  let fixture: ComponentFixture<LandingZoneWanVPNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanVPNComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanVPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
