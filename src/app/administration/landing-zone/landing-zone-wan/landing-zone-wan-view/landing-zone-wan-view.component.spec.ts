import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanViewComponent } from './landing-zone-wan-view.component';

describe('LandingZoneWanViewComponent', () => {
  let component: LandingZoneWanViewComponent;
  let fixture: ComponentFixture<LandingZoneWanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
