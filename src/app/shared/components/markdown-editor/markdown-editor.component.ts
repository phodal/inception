import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

const marked = require('marked');

import MarkdownHelper from './utils/markdown.helper';

@Component({
  selector: 'component-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit, AfterViewInit {
  value = `
 - [x] (A) 2016-03-14 2016-03-18 1.323 +tag +tag2 @context due: 2016-05-30
 - 33
    - 1.23
    - 1.44
      - 1.55
      - 2.55
 - 23.34
    `;

  private tempListItems = [];
  private tempLists = [];

  constructor(private markdownService: MarkdownService) {
    this.markdownService.renderer.list = this.renderList.bind(this);
    this.markdownService.renderer.listitem = this.renderListItem.bind(this);
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const tokens = marked.lexer(this.value);
    this.parseList(tokens);

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
    this.tempLists.push(this.tempListItems);
    const type = ordered ? 'ol' : 'ul';
    const startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';

    this.tempListItems = [];

    console.log('<ul>');
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  renderListItem(text): string {
    const splitText = MarkdownHelper.todoCompiled(text);
    text = splitText.text;

    console.log(text);

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

    this.tempListItems.push(splitText);
    return '<li>' + text + '</li>\n';
  }

  private parseList(tokens: marked.Token[]) {
    let result = '{';
    for (const token of tokens) {
      switch (token.type) {
        case 'list_start': {
          result += '"lists": [';
          break;
        }
        case 'list_item_start': {
          result += '{ "items": ';
          break;
        }
        case 'text': {
          result += `{ "text": "${token.text}"},`;
          break;
        }
        case 'list_item_end': {
          result += '},';
          break;
        }
        case 'list_end': {
          result += ']';
          break;
        }
        default: {
          console.log(token);
        }
      }
    }

    result = result.replace(/\,\]/g, ']').replace(/},}/g, '}}');
    result += '}';
    console.log(JSON.parse(result));
  }
}
