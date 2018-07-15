import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgKeyupEnterComponent } from './ng-keyupEnter.component';

describe('NgKeyup.EnterComponent', () => {
  let component: NgKeyupEnterComponent;
  let fixture: ComponentFixture<NgKeyupEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgKeyupEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgKeyupEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
