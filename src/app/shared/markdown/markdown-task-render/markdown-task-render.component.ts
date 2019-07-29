import { Component, Input, OnInit } from '@angular/core';
const marked = require('marked');

@Component({
  selector: 'component-markdown-task-render',
  templateUrl: './markdown-task-render.component.html',
  styleUrls: ['./markdown-task-render.component.scss']
})
export class MarkdownTaskRenderComponent implements OnInit {
  @Input() value: string;
  private tasks: any;

  constructor() { }

  ngOnInit() {
    const tokens = marked.lexer(this.value);
    this.parseList(tokens);
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

    result = result.replace(/,\]/g, ']').replace(/},}/g, '}}');
    result += '}';

    try {
      this.tasks = JSON.parse(result).lists;
    } catch (e) {

    }
  }
}
