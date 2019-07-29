import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {
  private editor: any;

  constructor() {
  }

  ngOnInit() {
    const markDownEl = document.querySelector('.markdown');
    this.editor = new (window as any).MediumEditor(document.querySelector('.editor'), {
      extensions: {
        markdown: new (window as any).MeMarkdown(md => {
          markDownEl.textContent = md;
        })
      }
    });
  }

}
