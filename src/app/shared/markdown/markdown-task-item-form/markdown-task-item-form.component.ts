import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';
import { MarkdownTaskModel } from '../model/markdown.model';

@Component({
  selector: 'component-markdown-task-item-form',
  templateUrl: './markdown-task-item-form.component.html',
  styleUrls: ['./markdown-task-item-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MarkdownTaskItemFormComponent),
      multi: true
    }
  ]
})
export class MarkdownTaskItemFormComponent implements OnInit, ControlValueAccessor {
  private disabled = false;
  private item: MarkdownTaskModel;

  onChange(param1) {
  }

  onTouched(param1) {
  }

  constructor() {
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
    if (obj !== null) {
      this.item = obj;
      if (this.item && !this.item.completed) {
        this.item.completed = false;
      }
    }
  }

  updateText($event: any) {
    this.item.editable = false;
    this.onChange(this.item);
  }

  changeStartDateInput($event: any) {
    this.item.startDate = $event;
    this.onChange(this.item);
  }

  changeEndDateInput($event: any) {
    this.item.endDate = $event;
    this.onChange(this.item);
  }

  enableEdit(event) {
    this.item.editable = true;
    this.onChange(this.item);
  }

  checkValue($event: MatCheckboxChange) {
    this.onChange(this.item);
  }
}
