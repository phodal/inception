import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownTaskRenderComponent } from './markdown-task-render.component';

describe('MarkdownTaskRenderComponent', () => {
  let component: MarkdownTaskRenderComponent;
  let fixture: ComponentFixture<MarkdownTaskRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownTaskRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownTaskRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
