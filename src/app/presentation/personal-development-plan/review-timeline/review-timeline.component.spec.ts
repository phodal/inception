import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTimelineComponent } from './review-timeline.component';

describe('ReviewTimelineComponent', () => {
  let component: ReviewTimelineComponent;
  let fixture: ComponentFixture<ReviewTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
