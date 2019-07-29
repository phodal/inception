import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit {
  private editor: any;

  constructor() {
  }

  ngOnInit() {
    const markDownEl = document.querySelector('.markdown');
    this.editor = new (window as any).MediumEditor(document.querySelector('.editor'), {
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'orderedlist', 'unorderedlist']
      },
      extensions: {
        markdown: new (window as any).MeMarkdown(md => {
          markDownEl.textContent = md;
        })
      }
    });
  }

}
