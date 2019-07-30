import { Component, forwardRef, OnInit } from '@angular/core';
import { MarkdownTaskModel } from '../model/markdown.model';
import MarkdownHelper from '../markdown-editor/utils/markdown.helper';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const marked = require('marked');

@Component({
  selector: 'component-markdown-task-render',
  templateUrl: './markdown-task-render.component.html',
  styleUrls: ['./markdown-task-render.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MarkdownTaskRenderComponent),
      multi: true
    }
  ]
})
export class MarkdownTaskRenderComponent implements OnInit, ControlValueAccessor {
  value: string;
  tasks: MarkdownTaskModel[];
  private disabled = false;

  onChange(value: any) {
  }

  onTouched() {
  }

  constructor() { }

  ngOnInit() {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
    if (this.value) {
      const tokens = marked.lexer(this.value);
      this.parseList(tokens);
    }
  }

  private parseList(tokens: marked.Token[]) {
    let result = '{';
    for (const token of tokens) {
      switch (token.type) {
        case 'list_start': {
          result += '"childrens": [';
          break;
        }
        case 'list_item_start': {
          result += '{ "item": ';
          break;
        }
        case 'text': {
          result += JSON.stringify(MarkdownHelper.todoCompiled(token.text)) + ',';
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

    result = result.replace(/,]/g, ']').replace(/},}/g, '}}');
    result += '}';

    try {
      this.tasks = JSON.parse(result).childrens;
    } catch (e) {

    }
  }

  modelChange() {
    this.onChange(this.tasks);
  }
}
