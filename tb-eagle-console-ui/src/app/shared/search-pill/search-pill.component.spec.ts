import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPillComponent } from './search-pill.component';

describe('SearchPillComponent', () => {
  let component: SearchPillComponent;
  let fixture: ComponentFixture<SearchPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
