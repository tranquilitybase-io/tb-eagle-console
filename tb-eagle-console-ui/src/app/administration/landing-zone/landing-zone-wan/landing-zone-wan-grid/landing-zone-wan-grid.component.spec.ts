import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanGridComponent } from './landing-zone-wan-grid.component';

describe('LandingZoneWanGridComponent', () => {
  let component: LandingZoneWanGridComponent;
  let fixture: ComponentFixture<LandingZoneWanGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
