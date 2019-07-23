import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'feature-business-canvas',
  templateUrl: './business-canvas.component.html',
  styleUrls: ['./business-canvas.component.scss']
})
export class BusinessCanvasComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private storage: StorageService) {

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

    this.form.valueChanges.subscribe(() => {
      this.formChange.emit(this.form);
    });
  }

  submitCanvasForm() {
    this.storage.setItem('inception.canvas', this.form.value);
  }
}
