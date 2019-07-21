import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'feature-project-purpose',
  templateUrl: './project-purpose.component.html',
  styleUrls: ['./project-purpose.component.scss']
})
export class ProjectPurposeComponent implements OnInit {
  backgroundGroupForm: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.backgroundGroupForm = this.formBuilder.group({
      dimens: this.formBuilder.array([
        this.formBuilder.group({
          title: ['', Validators.required],
          content: []
        })])
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdControl: ['', Validators.required]
    });
  }

  /**
   * Add new unit row into form
   */
  addUnit() {
    const control = this.backgroundGroupForm.get('dimens') as FormArray;
    console.log(control);
    control.push(this.getNewAction());
  }

  get formData() {
    return this.backgroundGroupForm.get('dimens') as FormArray;
  }

  /**
   * Remove unit row from form on click delete button
   */
  removeUnit(i: number) {
    const control = this.backgroundGroupForm.get('dimens') as FormArray;
    control.removeAt(i);
  }

  private getNewAction() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', [Validators.required]],
    });
  }
}
