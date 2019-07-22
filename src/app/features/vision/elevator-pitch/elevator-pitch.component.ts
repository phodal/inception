import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { StorageService } from '../../../core/services/storage.service';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'feature-elevator-pitch',
  templateUrl: './elevator-pitch.component.html',
  styleUrls: ['./elevator-pitch.component.scss']
})
export class ElevatorPitchComponent implements OnInit {
  pitchForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {
  }

  ngOnInit() {
    this.pitchForm = this.formBuilder.group({
      as: ['', Validators.required],
      think: ['', Validators.required],
      product: ['', Validators.required],
      is: ['', Validators.required],
      can: ['', Validators.required],
      different: ['', Validators.required],
      advantage: ['', Validators.required],
    });
  }
}
