import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-development-plan',
  templateUrl: './personal-development-plan.component.html',
  styleUrls: ['./personal-development-plan.component.scss']
})
export class PersonalDevelopmentPlanComponent implements OnInit {
  reviewGroupForm: FormGroup;
  defineFormGroup: FormGroup;
  articulateFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
