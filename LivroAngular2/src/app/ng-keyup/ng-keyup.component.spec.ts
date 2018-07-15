import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgKeyupComponent } from './ng-keyup.component';

describe('NgKeyupComponent', () => {
  let component: NgKeyupComponent;
  let fixture: ComponentFixture<NgKeyupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgKeyupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgKeyupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
