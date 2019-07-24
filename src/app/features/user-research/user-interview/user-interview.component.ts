import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'feature-user-interview',
  templateUrl: './user-interview.component.html',
  styleUrls: ['./user-interview.component.scss']
})
export class UserInterviewComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {

  }

  ngOnInit() {
    // based on: https://martinfowler.com/articles/lean-inception/describe-personas.html
    this.form = this.formBuilder.group({
      personas: this.formBuilder.array([
        this.getNewAction()
      ])
    });

    this.form.valueChanges.subscribe(() => {
      this.formChange.emit(this.form);
      this.submitPersonasForm();
    });

    this.initForm();
  }

  initForm() {
    const users = this.storage.getItem('inception.personas.user');
    if (!users) {
      return;
    }

    const control = this.form.get('personas') as FormArray;
    control.clear();
    users.personas.forEach(persona => {
      control.push(this.formBuilder.group({
        name: persona.name,
        avatar: persona.avatar,
        profiles: persona.profiles,
        behaviors: persona.behaviors,
        needs: persona.needs
      }));
    });
  }


  addUnit() {
    const control = this.form.get('personas') as FormArray;
    control.push(this.getNewAction());
  }

  get formData() {
    return this.form.get('personas') as FormArray;
  }

  removeUnit(i: number) {
    const control = this.form.get('personas') as FormArray;
    control.removeAt(i);
  }

  private getNewAction() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
      profiles: [[''], Validators.required],
      behaviors: [[''], Validators.required],
      needs: [[''], Validators.required]
    });
  }

  submitPersonasForm() {
    this.storage.setItem('inception.personas.user', this.form.value);
  }
}
