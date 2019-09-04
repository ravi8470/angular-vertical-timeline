import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTimeline2Component } from './vertical-timeline2.component';

describe('VerticalTimeline2Component', () => {
  let component: VerticalTimeline2Component;
  let fixture: ComponentFixture<VerticalTimeline2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalTimeline2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTimeline2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
