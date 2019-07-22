/*
 Copyright (C) 2018 Yaroslav Kikot
 This project is licensed under the terms of the MIT license.
 https://github.com/Zicrael/ngx-tree-dnd
*/
import { Directive, ElementRef, HostListener, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { TreeModel } from '../models/tree-view.model';
import { NgxTreeService } from '../ngx-tree-dnd.service';

@Directive({
  selector: '[libDropElement]'
})
export class DropElementsDirective {
  constructor(private el: ElementRef, private  treeService: NgxTreeService) {
  }

  @Input() item: TreeModel;
  @Output() drop = new EventEmitter();

  /*
      Event: onallowdrop;
      Call onDragOver() from tree service.
      Emit onAllowDrop on tree service.
  */
  @HostListener('dragover', ['$event'])
  onDragOver(event: Event) {
    const eventObj = {
      event,
      target: this.item
    };
    this.treeService.onDragOver(eventObj);
    event.preventDefault();
  }

  /*
      Event: ondrop;
      Call onDropItem() from tree service.
      Emit OnDrop on tree service.
  */
  @HostListener('drop', ['$event'])
  onDrop(event: Event) {
    const dragItem = this.treeService.isDragging;
    const eventObj = {
      event,
      target: this.item
    };
    dragItem.options.hideChildrens = this.treeService.lastExpandState;
    dragItem.options.currentlyDragging = false;
    if (dragItem !== eventObj.target) {
      this.treeService.onDropItem(eventObj);
    }
    event.preventDefault();
  }

  /*s
  Event: ondragenter;
  Detect event where draggable element enter in drop zone.
  Call enterDropZone() from tree service.
  Emit onDragEnter.
  */
  @HostListener('dragenter', ['$event'])
  onDragEnter(event: Event) {
    const eventObj = {
      event,
      target: this.item
    };
    this.treeService.enterDropZone(eventObj);
  }

  /*
      Event: ondragleave;
      Detect event where draggable element leave drop zone.
      Call leaveDropZone() from tree service.
      Emit onDragLeave.
  */
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: Event) {
    // emit events
    const eventObj = {
      event,
      target: this.item
    };
    // code
    this.treeService.leaveDropZone(eventObj);
  }
}
