import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { StorageService } from '../../../core/services/storage.service';
import { TileModel } from '../../../core/model/tile.model';

@Component({
  selector: 'feature-stakeholder-map',
  templateUrl: './stakeholder-map.component.html',
  styleUrls: ['./stakeholder-map.component.scss']
})
export class StakeholderMapComponent implements OnInit {
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
    const tiles = this.storage.getItem('stakeholder.map.tiles');
    if (tiles && tiles.length > 0) {
      this.tiles = tiles;
    }
  }

  modelChange($event: any, index: number) {
    const tempTiles: TileModel[] = JSON.parse(JSON.stringify(this.tiles));
    tempTiles[index] = $event;
    this.storage.setItem('stakeholder.map.tiles', tempTiles);
  }

  createNewTile() {
    this.tiles.push({
      editable: false,
      content: {
        text: '',
        html: ''
      },
      background: '',
      position: {
        x: 0,
        y: 0
      }
    });
  }
}
