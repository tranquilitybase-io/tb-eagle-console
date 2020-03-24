import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanFormsVpnTabComponent } from './landing-zone-wan-forms-vpn-tab.component';

describe('LandingZoneWanFormsVpnTabComponent', () => {
  let component: LandingZoneWanFormsVpnTabComponent;
  let fixture: ComponentFixture<LandingZoneWanFormsVpnTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanFormsVpnTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanFormsVpnTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
