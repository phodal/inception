import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownTaskItemComponent } from './markdown-task-item.component';

describe('MarkdownTaskItemComponent', () => {
  let component: MarkdownTaskItemComponent;
  let fixture: ComponentFixture<MarkdownTaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownTaskItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
