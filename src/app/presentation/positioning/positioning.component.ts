import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.scss']
})
export class PositioningComponent implements OnInit {
  backgroundGroupForm: FormGroup = this.formBuilder.group({});
  businessCanvasFormGroup: FormGroup = this.formBuilder.group({});
  balanceGroup: FormGroup = this.formBuilder.group({});

  // https://github.com/angular/components/issues/12345

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {

  }

}
