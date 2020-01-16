import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProgressOnInitComponent } from './set-progress-on-init.component';

describe('SetProgressOnInitComponent', () => {
  let component: SetProgressOnInitComponent;
  let fixture: ComponentFixture<SetProgressOnInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetProgressOnInitComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProgressOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
