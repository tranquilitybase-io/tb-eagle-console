import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanCreateVpnComponent } from './landing-zone-wan-create-vpn.component';

describe('LandingZoneWanCreateVpnComponent', () => {
  let component: LandingZoneWanCreateVpnComponent;
  let fixture: ComponentFixture<LandingZoneWanCreateVpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanCreateVpnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanCreateVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
