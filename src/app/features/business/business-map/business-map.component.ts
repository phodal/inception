import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { isEmpty } from 'lodash';

import { NgxTreeParentComponent } from '../../../shared/third-party/ngx-tree-dnd/ngx-tree-dnd-parent/ngx-tree-dnd-parent.component';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'feature-business-map',
  templateUrl: './business-map.component.html',
  styleUrls: ['./business-map.component.scss']
})
export class BusinessMapComponent implements OnInit, AfterViewInit {
  @ViewChild('treeComponent', null) treeComponent: NgxTreeParentComponent;
  treeData: any = [];

  config = {
    showActionButtons: true,
    showAddButtons: true,
    showRenameButtons: true,
    showDeleteButtons: true,
    showRootActionButtons: true, // set false to hide root action buttons.
    enableExpandButtons: true,
    enableDragging: true,
    rootTitle: '',
    validationText: '',
    minCharacterLength: 2,
    setItemsAsLinks: false
  };

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const that = this;
    const storageItem = this.storageService.getItem('tree');
    if (!isEmpty(storageItem)) {
      setTimeout(() => {
        that.treeData = JSON.parse(JSON.stringify(storageItem));
      });
    }
  }


  updateTree() {
    this.storageService.setItem('tree', this.treeData);
  }
}
