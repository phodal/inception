import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { isEmpty } from 'lodash';

import { StorageService } from '../../../core/services/storage.service';
import { TileModel } from '../../../core/model/tile.model';

@Component({
  selector: 'feature-stakeholder-map',
  templateUrl: './stakeholder-map.component.html',
  styleUrls: ['./stakeholder-map.component.scss']
})
export class StakeholderMapComponent implements AfterViewInit {
  @ViewChild('item', null) item: ElementRef;

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

  ngAfterViewInit() {
    const tiles = this.storage.getItem('stakeholder.map.tiles');
    console.log(tiles);
    if (tiles && tiles.length > 0) {
      this.tiles = tiles;
    }
  }

  contentChanged($event: any) {
    this.storage.setItem('stakeholder.map.tiles', this.tiles);
  }

  createNewTile() {
    this.tiles.push({
      editable: false,
      content: {
        text: '',
        html: ''
      },
      background: '#2ecc71',
      position: {
        x: 0,
        y: 0
      }
    });
  }
}
