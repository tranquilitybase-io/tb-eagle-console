import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanHomeDirectComponent } from './landing-zone-wan-home-direct.component';

describe('LandingZoneWanHomeDirectComponent', () => {
  let component: LandingZoneWanHomeDirectComponent;
  let fixture: ComponentFixture<LandingZoneWanHomeDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanHomeDirectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanHomeDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
