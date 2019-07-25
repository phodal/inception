import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { TodoModel } from '../../../core/model/todo.model';
import { Subject } from 'rxjs';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'component-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<any>();

  toDos: TodoModel[] = [];

  private unsubscribe = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      todo: [['']]
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
    this.addToDo(this.form.value.todo);
    this.form.controls.todo.setValue(null);
  }
}
