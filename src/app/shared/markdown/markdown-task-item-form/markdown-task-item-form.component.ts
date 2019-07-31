import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
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
  @Input() item: MarkdownTaskModel;
  @Output() itemChange = new EventEmitter();

  private disabled = false;

  onChange(param1) {
  }

  onTouched(param1) {
  }

  constructor() {
  }

  ngOnInit() {
  }


  registerOnChange(fn: any): void {
    this.itemChange.emit = fn;
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
    this.itemChange.emit(this.item);
  }

  changeStartDateInput($event: any) {
    this.item.startDate = $event;
    this.itemChange.emit(this.item);
  }

  changeEndDateInput($event: any) {
    this.item.endDate = $event;
    this.itemChange.emit(this.item);
  }

  enableEdit(event) {
    this.item.editable = true;
    this.itemChange.emit(this.item);
  }

  checkValue($event: MatCheckboxChange) {
    this.itemChange.emit(this.item);
  }
}
