import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {
  businessGroupForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
  }
}
