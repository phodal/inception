import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'component-markdown-task-item',
  templateUrl: './markdown-task-item.component.html',
  styleUrls: ['./markdown-task-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MarkdownTaskItemComponent),
      multi: true
    }
  ]
})
export class MarkdownTaskItemComponent implements OnInit, ControlValueAccessor {
  @Input() list: [];

  private disabled = false;

  onChange(_) {
  }

  onTouched(_) {
  }

  ngOnInit(): void {
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
      this.list = obj;
    }
  }

  checkValue($event: any) {
    this.onChange(this.list);
  }

  log(item: any) {
    return JSON.stringify(item);
  }

  changeDateInput(event: any, item) {
    console.log(event, item);
  }
}
