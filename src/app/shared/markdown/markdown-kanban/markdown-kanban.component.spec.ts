import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownKanbanComponent } from './markdown-kanban.component';

describe('MarkdownKanbanComponent', () => {
  let component: MarkdownKanbanComponent;
  let fixture: ComponentFixture<MarkdownKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
