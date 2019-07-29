import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-markdown-render',
  templateUrl: './markdown-render.component.html',
  styleUrls: ['./markdown-render.component.scss']
})
export class MarkdownRenderComponent implements OnInit {
  @Input() markdown: string;

  constructor() { }

  ngOnInit() {
  }

}
