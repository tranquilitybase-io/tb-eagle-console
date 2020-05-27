import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanEditVpnComponent } from './landing-zone-wan-edit-vpn.component';

describe('LandingZoneWanEditVpnComponent', () => {
  let component: LandingZoneWanEditVpnComponent;
  let fixture: ComponentFixture<LandingZoneWanEditVpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanEditVpnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanEditVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
