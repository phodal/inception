import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

import MarkdownHelper from './utils/markdown.helper';

@Component({
  selector: 'component-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
  @Input() value = `
 - [x] (A) 2016-03-14 2016-03-18 1.323 +tag +tag2 @context due: 2016-05-30
 - 33
    - 1.23
    - 1.44
      - 1.55
      - 2.55
 - 23.34
    `;
  @Output() change = new EventEmitter();
  constructor(private markdownService: MarkdownService) {
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
    this.change.emit(value);
  }
}
