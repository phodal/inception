import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownTaskItemFormComponent } from './markdown-task-item-form.component';

describe('MarkdownTaskItemFormComponent', () => {
  let component: MarkdownTaskItemFormComponent;
  let fixture: ComponentFixture<MarkdownTaskItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownTaskItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownTaskItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
