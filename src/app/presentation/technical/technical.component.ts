import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {
  youTree = [
    {
      name: '首页',
      id: 1,
      options: {
        hidden: false,
        position: 1,
        href: 'https://github.com/Zicrael/ngx-tree-dnd'
      },
      childrens: [
        {
          name: 'Iphone',
          id: 2,
          childrens: []
        }
      ]
    }
  ];

  config = {
    showActionButtons: true,
    showAddButtons: true,
    showRenameButtons: true,
    showDeleteButtons: true,
    showRootActionButtons: true, // set false to hide root action buttons.
    enableExpandButtons: true,
    enableDragging: true,
    rootTitle: '',
    validationText: 'Enter valid company',
    minCharacterLength: 2,
    setItemsAsLinks: false
  };

  constructor() {
  }

  ngOnInit() {
  }

}
