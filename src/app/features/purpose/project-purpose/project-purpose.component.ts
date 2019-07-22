import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'feature-project-purpose',
  templateUrl: './project-purpose.component.html',
  styleUrls: ['./project-purpose.component.scss']
})
export class ProjectPurposeComponent implements OnInit {
  backgroundGroupForm: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {
    this.backgroundGroupForm = this.formBuilder.group({
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

    console.log((this.backgroundGroupForm.get('dimens') as FormArray).at(0).get('items'));

    (this.backgroundGroupForm.get('dimens') as FormArray).at(0).get('items').setValue([{
      content: ''
    }]);

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdControl: ['', Validators.required]
    });
  }

  addUnit() {
    const control = this.backgroundGroupForm.get('dimens') as FormArray;
    control.push(this.getNewAction());
  }

  addSubUnit(i) {
    this.getContentItemFormArray(i).push(this.getNewSubAction());
  }

  get formData() {
    return this.backgroundGroupForm.get('dimens') as FormArray;
  }

  getSubFormData(i) {
    return this.getContentItemFormArray(i);
  }

  getContentItemFormArray(i) {
    return (this.backgroundGroupForm.get('dimens') as FormArray).at(i).get('items') as FormArray;
  }

  removeUnit(i: number) {
    const control = this.backgroundGroupForm.get('dimens') as FormArray;
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
    this.storage.setItem('background', this.backgroundGroupForm.value);
  }
}
