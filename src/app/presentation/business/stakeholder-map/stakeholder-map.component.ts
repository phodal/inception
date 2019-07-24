import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDragEnd, moveItemInArray } from '@angular/cdk/drag-drop';

import { StorageService } from '../../../core/services/storage.service';
import { TileModel } from '../../../core/model/tile.model';

@Component({
  selector: 'feature-stakeholder-map',
  templateUrl: './stakeholder-map.component.html',
  styleUrls: ['./stakeholder-map.component.scss']
})
export class StakeholderMapComponent implements OnInit {
  @ViewChild('item', null) item: ElementRef;

  initialPosition = { x: 0, y: 0 };
  position = { ...this.initialPosition };
  offset = { x: 0, y: 0 };
  tiles: TileModel[] = [{
    editable: false,
    content: {
      text: 'Angular Rocks !!',
      html: '<i>Angular </i><b>Rocks !!</b>'
    },
    background: '#2ecc71',
    position: {
      x: 0,
      y: 0
    }
  }];

  constructor(private storage: StorageService) {
  }

  ngOnInit() {

  }

  dragEnd(event: CdkDragEnd) {
    this.offset = { ...(event.source._dragRef as any)._passiveTransform };

    this.position.x = this.initialPosition.x + this.offset.x;
    this.position.y = this.initialPosition.y + this.offset.y;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }

  contentChanged($event: any) {

  }
}