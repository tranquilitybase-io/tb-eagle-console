import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneFolderHomeComponent } from './landing-zone-folder-home.component';

describe('LandingZoneFolderHomeComponent', () => {
  let component: LandingZoneFolderHomeComponent;
  let fixture: ComponentFixture<LandingZoneFolderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneFolderHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneFolderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
