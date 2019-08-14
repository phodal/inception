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
    const storageValue = this.storage.getItemString('smde_pholedge');
    if (storageValue) {
      this.textValue = storageValue;
    }
  }

  changeValue($event) {
    this.storage.setItemString('smde_pholedge', $event);
  }
}
