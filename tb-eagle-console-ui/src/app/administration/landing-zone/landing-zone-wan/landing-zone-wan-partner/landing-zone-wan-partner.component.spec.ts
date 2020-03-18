import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanPartnerComponent } from './landing-zone-wan-partner.component';

describe('LandingZoneWanPartnerComponent', () => {
  let component: LandingZoneWanPartnerComponent;
  let fixture: ComponentFixture<LandingZoneWanPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanPartnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
