import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsHomeComponent } from './settings-home.component';

describe('UsersHomeComponent', () => {
  let component: SettingsHomeComponent;
  let fixture: ComponentFixture<SettingsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
