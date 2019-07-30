import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownTasksEditorComponent } from './markdown-tasks-editor.component';

describe('MarkdownEditorComponent', () => {
  let component: MarkdownTasksEditorComponent;
  let fixture: ComponentFixture<MarkdownTasksEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownTasksEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownTasksEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
