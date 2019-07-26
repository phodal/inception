import { Component, Input, OnInit } from '@angular/core';

import { ChecklistModel } from '../../../core/model/checklist.model';

@Component({
  selector: 'component-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  @Input() checklists: ChecklistModel[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log(this.checklists);
  }

}
