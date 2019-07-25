import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.scss']
})
export class PositioningComponent  {
  backgroundGroupForm: FormGroup = this.formBuilder.group({});
  businessCanvasFormGroup: FormGroup = this.formBuilder.group({});
  balanceGroup: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
  }
}
