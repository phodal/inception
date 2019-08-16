import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  userPersonasForm: FormGroup = this.formBuilder.group({});
  customerPersonasForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
