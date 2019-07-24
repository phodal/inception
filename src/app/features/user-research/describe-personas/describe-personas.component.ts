import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'feature-describe-personas',
  templateUrl: './describe-personas.component.html',
  styleUrls: ['./describe-personas.component.scss']
})
export class DescribePersonasComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {

  }

  ngOnInit() {
    // based on: https://martinfowler.com/articles/lean-inception/describe-personas.html
    this.form = this.formBuilder.group({
      personas: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          url: ['', Validators.required],
          profiles: [[''], Validators.required],
          behaviors: [[''], Validators.required],
          needs: [[''], Validators.required],
        })
      ])
    });

    this.form.valueChanges.subscribe(() => {
      this.formChange.emit(this.form);
    });
  }

  submitPersonasForm() {
    this.storage.setItem('inception.describe.personas', this.form.value);
  }
}
