import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-development-plan',
  templateUrl: './personal-development-plan.component.html',
  styleUrls: ['./personal-development-plan.component.scss']
})
export class PersonalDevelopmentPlanComponent implements OnInit {
  reviewGroupForm: FormGroup = this.formBuilder.group({});
  defineFormGroup: FormGroup;
  articulateFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
  }

}
