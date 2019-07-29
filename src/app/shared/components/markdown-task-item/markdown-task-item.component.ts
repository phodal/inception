import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-markdown-task-item',
  templateUrl: './markdown-task-item.component.html',
  styleUrls: ['./markdown-task-item.component.scss']
})
export class MarkdownTaskItemComponent implements OnInit {
  @Input() list: [];

  constructor() { }

  ngOnInit() {
  }

}
