import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneHomeComponent } from './landing-zone-home.component';

describe('LandingZoneHomeComponent', () => {
  let component: LandingZoneHomeComponent;
  let fixture: ComponentFixture<LandingZoneHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
