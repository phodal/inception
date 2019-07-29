import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
  value = `
 - 1.323
 - 33..
    - 1.23
    - 1.44.
 - 23.34
    `;

  constructor() {
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
}
