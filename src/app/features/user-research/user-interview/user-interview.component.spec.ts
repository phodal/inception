import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterviewComponent } from './user-interview.component';

describe('UserInterviewComponent', () => {
  let component: UserInterviewComponent;
  let fixture: ComponentFixture<UserInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
