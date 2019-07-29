import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

export interface MarkdownTaskModel {
  completed: boolean;
  startDate?: string;
  endDate?: string;
  text: string;
  context?: string;
  priority?: string;
  mail?: string;
  tag?: string;
}

@Component({
  selector: 'component-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
  value = `
 - [x] (A) 2016-03-14 2016-03-18 1.323 +tag +tag2 @context due: 2016-05-30
 - 33..
    - 1.23
    - 1.44.
 - 23.34
    `;

  COMPLETED_PATTERN = /([X,x] )(.*)/g;
  COMPLETED_PREPENDED_DATES_PATTERN = /(\d{4}-\d{2}-\d{2}) (\d{4}-\d{2}-\d{2}) (.*)/g;
  SINGLE_DATE_PATTERN = /(\d{4}-\d{2}-\d{2}) (.*)/g;
  CONTEXT_PATTERN = /(?:^|\s)@(\S*\w)/g;
  TAG_PATTERN = /(?:^|\s)\+(\S*\w)/g;
  PRIORITY_PATTERN = /\(([A-Z])\) (.*)/g;

  constructor(private markdownService: MarkdownService) {
    this.markdownService.renderer.list = this.renderList.bind(this);
    this.markdownService.renderer.listitem = this.renderListItem.bind(this);
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const that = this;
    const simplemde = new (window as any).SimpleMDE({
      autoDownloadFontAwesome: false,
      autosave: true,
      status: ['autosave', 'lines', 'words', 'cursor', {
        className: 'keystrokes',
        defaultValue(el) {
          this.keystrokes = 0;
          el.innerHTML = '0 Keystrokes';
        },
        onUpdate(el) {
          el.innerHTML = ++this.keystrokes + ' Keystrokes';
        }
      }],
      element: document.querySelector('.markdown-editor')
    });
    simplemde.value(this.value);
    simplemde.codemirror.on('change', () => {
      that.updateValue(simplemde.value());
    });
  }

  updateValue(value) {
    this.value = value;
  }

  renderList(body: string, ordered: boolean, start: number): string {
    const type = ordered ? 'ol' : 'ul';
    const startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  renderListItem(text): string {
    const splitText = this.splitterText(text);
    text = splitText.text;

    if (splitText.tag) {
      text = `<span class='tag'>${splitText.tag}</span> ${text}`;
    }
    if (splitText.priority) {
      text = `<span class='priority'>${splitText.priority}</span> ${text}`;
    }
    if (splitText.startDate) {
      text = `<span class='start-date'>${splitText.startDate}</span> ${text}`;
    }
    if (splitText.endDate) {
      text = `<span class='end-date'>${splitText.endDate}</span> ${text}`;
    }
    if (splitText.context) {
      text = `<span class='end-date'>${splitText.context}</span> ${text}`;
    }
    return '<li>' + text + '</li>\n';
  }

  // tslint:disable-next-line:max-line-length
  // REFS: https://github.com/todotxt/todo.txt-android/blob/614e0b5eb688cae8236f33c64d7e791d1030cf3c/app/src/main/java/com/todotxt/todotxttouch/task/TextSplitter.java
  splitterText(text: any): MarkdownTaskModel {
    let completed = false;
    let startDate;
    let endDate;
    let context;
    let priority;
    let tag;

    const completeMatch = this.COMPLETED_PATTERN.exec(text);
    if (completeMatch && completeMatch.length && completeMatch.length > 1) {
      completed = true;
      text = completeMatch[2];
    }

    const priorityMatch = this.PRIORITY_PATTERN.exec(text);
    if (priorityMatch && priorityMatch.length && priorityMatch.length > 1) {
      priority = priorityMatch[1];
      text = priorityMatch[2];
    }

    const dateMatch = this.COMPLETED_PREPENDED_DATES_PATTERN.exec(text);
    if (dateMatch && dateMatch.length && dateMatch.length > 2) {
      startDate = dateMatch[1];
      endDate = dateMatch[2];
      text = dateMatch[3];
    } else {
      const singleDateMatch = this.SINGLE_DATE_PATTERN.exec(text);
      if (singleDateMatch && singleDateMatch.length && singleDateMatch.length >= 2) {
        endDate = singleDateMatch[1];
        text = singleDateMatch[2];
      }
    }

    const contextMatch = this.CONTEXT_PATTERN.exec(text);
    if (contextMatch && contextMatch.length && contextMatch.length > 1) {
      context = contextMatch[1];
      text = text.replace(this.CONTEXT_PATTERN, '');
    }

    const tagMatch = this.TAG_PATTERN.exec(text);
    if (tagMatch && tagMatch.length && tagMatch.length > 1) {
      tag = tagMatch[1];
      text = text.replace(this.TAG_PATTERN, '');
  }

    return {
      completed,
      startDate,
      endDate,
      tag,
      context,
      priority,
      text
    };
  }
}
