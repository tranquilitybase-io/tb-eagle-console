import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { welcomeComponent } from './welcome.component';

describe('welcomeComponent', () => {
  let component: welcomeComponent;
  let fixture: ComponentFixture<welcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [welcomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(welcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
