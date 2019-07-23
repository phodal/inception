import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  // https://github.com/angular/components/issues/12345

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {

  }

  submitBalance() {
    this.storage.setItem('inception.balance', this.balanceGroup.value);
  }

  submitBackgroundForm() {
    this.storage.setItem('inception.background', this.balanceGroup.value);
  }

  submitCanvasForm() {
    this.storage.setItem('inception.canvas', this.balanceGroup.value);
  }
}
