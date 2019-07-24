import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'feature-project-balance',
  templateUrl: './project-balance.component.html',
  styleUrls: ['./project-balance.component.scss']
})
export class ProjectBalanceComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private storage: StorageService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
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

    this.form.patchValue({
      time: balance.time,
      experience: balance.experience,
      budget: balance.budget,
      performance: balance.performance,
      scope: balance.scope
    });
  }

  submitBalance() {
    this.storage.setItem('inception.balance', this.form.value);
  }
}
