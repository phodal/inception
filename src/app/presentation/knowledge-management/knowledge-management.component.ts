import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-knowledge-management',
  templateUrl: './knowledge-management.component.html',
  styleUrls: ['./knowledge-management.component.scss']
})
export class KnowledgeManagementComponent implements OnInit {
  textValue = '';

  constructor(private storage: StorageService) {

  }

  ngOnInit() {
    const storageValue = this.storage.getItemString('knowledge.editor.value');
    if (storageValue) {
      this.textValue = storageValue;
    }
  }

  changeValue($event) {
    console.log($event);
    console.log(typeof $event);
    this.storage.setItemString('knowledge.editor.value', $event);
  }
}
