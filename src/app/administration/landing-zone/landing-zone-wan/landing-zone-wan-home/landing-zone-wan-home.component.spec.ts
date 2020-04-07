import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanHomeComponent } from './landing-zone-wan-home.component';

describe('LandingZoneWanHomeComponent', () => {
  let component: LandingZoneWanHomeComponent;
  let fixture: ComponentFixture<LandingZoneWanHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
