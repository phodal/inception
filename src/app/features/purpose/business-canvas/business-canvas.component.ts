import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-canvas',
  templateUrl: './business-canvas.component.html',
  styleUrls: ['./business-canvas.component.scss']
})
export class BusinessCanvasComponent implements OnInit {
  @Output() set form(value) {
    this._form = value;
    this.formChange.emit(this._form);
  }
  // @ts-ignore
  @Input() get form() {
    return this._form;
  }
  // tslint:disable-next-line:variable-name
  _form: FormGroup;
  formChange = new EventEmitter();


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      keyPartners: [['']],
      keyActivities: [['']],
      valueProposition: [['']],
      customerRelationship: [['']],
      customerSegments: [['']],
      keyResources: [['']],
      channels: [['']],
      costStructure: [['']],
      revenueStreams: [['']]
    });

  }

}
