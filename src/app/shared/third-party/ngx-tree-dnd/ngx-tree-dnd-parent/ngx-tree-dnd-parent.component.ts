import { FormBuilder, Validators } from '@angular/forms';
/*
 Copyright (C) 2018 Yaroslav Kikot
 This project is licensed under the terms of the MIT license.
 https://github.com/Zicrael/ngx-tree-dnd
 */
import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { NgxTreeService } from '../ngx-tree-dnd.service';
import { TreeModel, TreeConfig } from '../models/tree-view.model';

@Component({
  selector: 'lib-ngx-tree-component',
  templateUrl: './ngx-tree-dnd-parent.component.html'
})
export class NgxTreeParentComponent implements AfterViewInit {
  treeView: TreeModel[];
  userConfig: TreeConfig = {
    showActionButtons: true,
    showAddButtons: true,
    showRenameButtons: true,
    showDeleteButtons: true,
    showRootActionButtons: true,
    enableExpandButtons: true,
    enableDragging: true,
    rootTitle: 'Root',
    options: {
      edit: false
    },
    validationText: 'Enter valid name',
    minCharacterLength: 1,
    setItemsAsLinks: false,
    setFontSize: 16,
    setIconSize: 14
  };
  showError: boolean;
  renameForm;
  @Output() ondragstart: EventEmitter<any> = new EventEmitter();
  @Output() ondragenter: EventEmitter<any> = new EventEmitter();
  @Output() ondragleave: EventEmitter<any> = new EventEmitter();
  @Output() ondrop: EventEmitter<any> = new EventEmitter();
  @Output() onallowdrop: EventEmitter<any> = new EventEmitter();
  @Output() ondragend: EventEmitter<any> = new EventEmitter();
  @Output() onadditem: EventEmitter<any> = new EventEmitter();
  @Output() onstartRenameItem: EventEmitter<any> = new EventEmitter();
  @Output() onfinishRenameItem: EventEmitter<any> = new EventEmitter();
  @Output() onstartDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() onfinishDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() oncancelDeleteItem: EventEmitter<any> = new EventEmitter();

  @Input()
  set config(config: TreeConfig) {
    // seal config
    Object.seal(this.userConfig);
    try {
      // if config it`s pass
      this.setConfig(config);
      this.treeService.config.next(this.userConfig);
    } catch (error) {
      // if config invalid
      console.log('Config is invalid! Default configuragion will be appeared');
      this.treeService.config.next(this.treeService.defaulConfig);
    }
  }

  @Input()
  set treeData(item: TreeModel[]) {
    // get user tree data
    this.getTreeData(item);
  }

  constructor(public treeService: NgxTreeService, private fb: FormBuilder) {
    this.enableSubscribers();
    this.createForm();
  }

  // set user config
  setConfig(config) {
    for (const key of Object.keys(config)) {
      this.setValue(key, config);
    }
    this.renameForm.patchValue({
      name: this.userConfig.rootTitle
    });
  }

  // set value to keys of config
  setValue(item, config) {
    this.userConfig[item] = config[item];
  }

  // subscribe to all events and emit them to user.
  enableSubscribers() {
    this.treeService.onDrop.subscribe(
      (event) => {
        this.ondrop.emit(event);
      }
    );
    this.treeService.onDragStart.subscribe(
      (event) => {
        this.ondragstart.emit(event);
      }
    );
    this.treeService.onAllowDrop.subscribe(
      (event) => {
        this.onallowdrop.emit(event);
      }
    );
    this.treeService.onDragEnd.subscribe(
      (event) => {
        this.ondragend.emit(event);
      }
    );
    this.treeService.onAddItem.subscribe(
      (event) => {
        this.onadditem.emit(event);
      }
    );
    this.treeService.onStartRenameItem.subscribe(
      (event) => {
        this.onstartRenameItem.emit(event);
      }
    );
    this.treeService.onFinishRenameItem.subscribe(
      (event) => {
        this.onfinishRenameItem.emit(event);
      }
    );
    this.treeService.onStartDeleteItem.subscribe(
      (event) => {
        this.onstartDeleteItem.emit(event);
      }
    );
    this.treeService.onFinishDeleteItem.subscribe(
      (event) => {
        this.onfinishDeleteItem.emit(event);
      }
    );
    this.treeService.onCancelDeleteItem.subscribe(
      (event) => {
        this.oncancelDeleteItem.emit(event);
      }
    );
    this.treeService.onDragEnter.subscribe(
      (event) => {
        this.ondragenter.emit(event);
      }
    );
    this.treeService.onDragLeave.subscribe(
      (event) => {
        this.ondragleave.emit(event);
      }
    );
  }

  // get tree data from treeService.
  getTreeData(userTree) {
    this.treeService.getLocalData(userTree).subscribe(
      (tree: TreeModel[]) => {
        this.treeView = tree;
        setTimeout(() => {
          this.treeService.sortTree();
        });
      }, (error) => {
        console.log(error);
      }
    );
  }

  // create edit canvas
  createForm() {
    this.renameForm = this.fb.group({
      name: [this.userConfig.rootTitle || '', [
        Validators.required,
        Validators.minLength(this.userConfig.minCharacterLength)
      ]]
    });
  }

  enableRootRenameMode() {
    this.userConfig.options.edit = true;
  }

  submitAdd(name) {
    const d = `${new Date().getFullYear()}${new Date().getDay()}${new Date().getTime()}`;
    const elemId = parseInt(d, null);
    this.treeService.addNewItem(elemId, name, null);
  }

  submitRootRename() {
    if (this.renameForm.valid) {
      this.showError = false;
      this.userConfig.rootTitle = this.renameForm.value.name;
      this.userConfig.options.edit = false;
    } else {
      this.showError = true;
    }
  }

  ngAfterViewInit() {
  }


}
