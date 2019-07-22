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
  balanceGroup: FormGroup;

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

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.balanceGroup = this.formBuilder.group({
      time: [3, Validators.required],
      experience: [3, Validators.required],
      budget: [3, Validators.required],
      performance: [3, Validators.required],
      scope: [3, Validators.required]
    });

    this.initForm();
  }

  initForm() {
    const balance = this.storage.getItem('inception.balance');
    if (!balance) {
      return;
    }

    this.balanceGroup.patchValue({
      time: balance.time,
      experience: balance.experience,
      budget: balance.budget,
      performance: balance.performance,
      scope: balance.scope
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

  submitBalance() {
    this.storage.setItem('inception.balance', this.balanceGroup.value);
  }
}
