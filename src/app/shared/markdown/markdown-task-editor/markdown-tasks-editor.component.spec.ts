import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownTasksEditorComponent } from './markdown-tasks-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared.module';
import { FeaturesModule } from '../../../features/features.module';

describe('MarkdownEditorComponent', () => {
  let component: MarkdownTasksEditorComponent;
  let fixture: ComponentFixture<MarkdownTasksEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule,
        FeaturesModule
      ],
      declarations: [ ]
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
