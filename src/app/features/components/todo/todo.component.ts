import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { TodoModel } from '../../../core/model/todo.model';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'component-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TodoComponent),
    multi: true
  }
]
})
export class TodoComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() form: FormGroup;
  @Input() toDos: TodoModel[] = [];
  @Input() disableInput = false;

  @Output() formChange = new EventEmitter<any>();

  private unsubscribe = new Subject<void>();
  private disabled = false;

  onChange(change: any) {}
  onTouched() {}

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      todo: ['', [
        Validators.required,
        Validators.minLength(2)
      ]]
    });

    this.form.valueChanges.subscribe(() => {
      this.formChange.emit(this.form);
    });
  }

  addToDo(value) {
    this.toDos.push({
      id: Math.random(),
      complete: false,
      title: value
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  completeChange($event: MatCheckboxChange, toDo: TodoModel) {
    toDo.complete = $event.checked;
    this.onChange(this.toDos);
  }

  submitTodo() {
    if (this.form.valid) {
      this.addToDo(this.form.value.todo);
      this.form.controls.todo.setValue(null);
    }
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

  writeValue(value: any): void {
    this.toDos = value;
  }
}
