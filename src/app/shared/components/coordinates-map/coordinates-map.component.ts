import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { random } from 'lodash';

import { StorageService } from '../../../core/services/storage.service';
import { TileModel } from '../../../core/model/tile.model';

@Component({
  selector: 'component-coordinates-map',
  templateUrl: './coordinates-map.component.html',
  styleUrls: ['./coordinates-map.component.scss']
})
export class CoordinatesMapComponent implements OnInit {
  @Input() storageName;
  @Input() title;

  @ViewChild('item', null) item: ElementRef;

  storageKey = this.storageName + '.map.tiles';
  tiles: TileModel[] = [{
    editable: false,
    content: {
      text: 'Inception',
      html: '<b>Inception</b>'
    },
    background: '#2ecc71',
    position: {
      x: 0,
      y: 0
    }
  }];
  colors = [
    '#e67e22', // carrot
    '#2ecc71', // emerald
    '#3498db', // peter river
    '#8e44ad', // wisteria
    '#e74c3c', // alizarin
    '#1abc9c', // turquoise
    '#2c3e50', // midnight blue
  ];

  constructor(private storage: StorageService) {
  }

  ngOnInit() {
    const tiles = this.storage.getItem(this.storageKey);
    if (tiles && tiles.length > 0) {
      this.tiles = tiles;
    }
  }

  modelChange($event: any, index: number) {
    const tempTiles: TileModel[] = JSON.parse(JSON.stringify(this.tiles));
    tempTiles[index] = $event;
    this.storage.setItem(this.storageKey, tempTiles);
  }

  createNewTile() {
    this.tiles.push({
      editable: false,
      content: {
        text: '',
        html: ''
      },
      background: this.colors[random(0, this.colors.length)],
      position: {
        x: 0,
        y: 0
      }
    });
  }
}
