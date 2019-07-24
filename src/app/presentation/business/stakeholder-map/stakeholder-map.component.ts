import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { isEmpty } from 'lodash';

import { StorageService } from '../../../core/services/storage.service';

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
  tile = {
    editable: false,
    tile: {
      content: {
        text: 'Angular Rocks !!',
        html: '<i>Angular </i><b>Rocks !!</b>'
      },
      background: '#2ecc71'
    }
  };

  constructor(private storage: StorageService) {
  }

  ngOnInit() {

  }

  dragEnd(event: CdkDragEnd) {
    this.offset = { ...(event.source._dragRef as any)._passiveTransform };

    this.position.x = this.initialPosition.x + this.offset.x;
    this.position.y = this.initialPosition.y + this.offset.y;
  }

  contentChanged($event: any) {

  }
}
