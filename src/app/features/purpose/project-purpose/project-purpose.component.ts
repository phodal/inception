import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'feature-project-purpose',
  templateUrl: './project-purpose.component.html',
  styleUrls: ['./project-purpose.component.scss']
})
export class ProjectPurposeComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      dimens: this.formBuilder.array([
        this.formBuilder.group({
          title: ['', Validators.required],
          items: this.formBuilder.array([
            this.formBuilder.group({
              content: ['', Validators.required]
            })
          ])
        })
      ])
    });

    this.form.valueChanges.subscribe(() => {
      this.formChange.emit(this.form);
    });
  }

  addUnit() {
    const control = this.form.get('dimens') as FormArray;
    control.push(this.getNewAction());
  }

  addSubUnit(i) {
    this.getContentItemFormArray(i).push(this.getNewSubAction());
  }

  get formData() {
    return this.form.get('dimens') as FormArray;
  }

  getSubFormData(i) {
    return this.getContentItemFormArray(i);
  }

  getContentItemFormArray(i) {
    return (this.form.get('dimens') as FormArray).at(i).get('items') as FormArray;
  }

  removeUnit(i: number) {
    const control = this.form.get('dimens') as FormArray;
    control.removeAt(i);
  }

  removeSubUnit(i: number, j: number) {
    if (this.getContentItemFormArray(i).controls.length === 1) {
      return;
    }
    this.getContentItemFormArray(i).removeAt(j);
  }

  private getNewAction() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      items: this.formBuilder.array([
        this.getNewSubAction()
      ])
    });
  }

  private getNewSubAction() {
    return this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  submitBackground() {
    this.storage.setItem('background', this.form.value);
  }
}
