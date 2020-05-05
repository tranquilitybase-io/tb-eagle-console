import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanEditComponent } from './landing-zone-wan-edit.component';

describe('LandingZoneWanEditComponent', () => {
  let component: LandingZoneWanEditComponent;
  let fixture: ComponentFixture<LandingZoneWanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
