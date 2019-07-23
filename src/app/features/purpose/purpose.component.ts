import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'feature-project',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss']
})
export class PurposeComponent implements OnInit {
  backgroundGroupForm: FormGroup = this.formBuilder.group({});
  businessCanvasFormGroup: FormGroup = this.formBuilder.group({});
  balanceGroup: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {
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

  submitBalance() {
    this.storage.setItem('inception.balance', this.balanceGroup.value);
  }

  submitBackgroundForm() {
    console.log(this.backgroundGroupForm);
  }

  submitCanvasForm() {
    console.log(this.businessCanvasFormGroup);
  }
}
