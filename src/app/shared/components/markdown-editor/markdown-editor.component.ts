import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
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
          console.log(el);
          el.innerHTML = ++this.keystrokes + ' Keystrokes';
        }
      }],
      element: document.querySelector('.markdown-editor')
    });
    console.log(simplemde);
  }

}
