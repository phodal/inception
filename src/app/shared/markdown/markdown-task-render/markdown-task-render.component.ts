import { Component, forwardRef, OnInit } from '@angular/core';
import { MarkdownTaskModel } from '../model/markdown.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MarkdownTaskItemService } from '../markdown-task-item/markdown-task-item.service';

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
  hasSubscribe = false;
  private disabled = false;

  onChange(value: any) {
  }

  onTouched() {
  }

  constructor(private markdownTaskItemService: MarkdownTaskItemService) {
  }

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
    if (obj) {
      this.tasks = obj;
      if (this.hasSubscribe) {
        return;
      }
      this.markdownTaskItemService.subTasks('hello').subscribe((results) => {
        this.onChange(results);
        this.hasSubscribe = true;
      });
    }
  }

  modelChange() {
    this.onChange(this.tasks);
  }
}
