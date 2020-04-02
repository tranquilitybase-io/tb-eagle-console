import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanFormsVpnComponent } from './landing-zone-wan-forms-vpn.component';

describe('LandingZoneWanFormsVpnComponent', () => {
  let component: LandingZoneWanFormsVpnComponent;
  let fixture: ComponentFixture<LandingZoneWanFormsVpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanFormsVpnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanFormsVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
