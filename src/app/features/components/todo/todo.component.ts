import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { TodoModel } from '../../../core/model/todo.model';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'component-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() form: FormGroup;
  @Input() toDos: TodoModel[] = [];
  @Input() disableInput = false;
  @Output() formChange = new EventEmitter<any>();

  private unsubscribe = new Subject<void>();

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
      task: value
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  completeChange($event: MatCheckboxChange, toDo: TodoModel) {
    toDo.complete = true;
  }

  submitTodo() {
    if (this.form.valid) {
      this.addToDo(this.form.value.todo);
      this.form.controls.todo.setValue(null);
    }
  }
}
