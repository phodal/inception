import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';

import { ChecklistModel } from '../../../core/model/checklist.model';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'component-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  @Input() checklists: ChecklistModel[] = [];
  @Input() name: string;

  constructor(private storage: StorageService) {
  }

  ngOnInit() {
    const storageChecklist = this.storage.getItem('inception.checklist.' + this.name);
    if (!isEmpty(storageChecklist)) {
      this.checklists = storageChecklist;
    }
  }

  changeTodo($event: any) {
    this.storage.setItem('inception.checklist.' + this.name, this.checklists);
  }
}
