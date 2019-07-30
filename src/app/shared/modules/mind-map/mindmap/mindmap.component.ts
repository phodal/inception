import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'component-mindmap',
  templateUrl: './mindmap.component.html',
  styleUrls: ['./mindmap.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MindmapComponent implements OnInit {
  // Refs: http://bl.ocks.org/jdarling/2d4e84460d5f5df9c0ff
  ngOnInit(): void {
  }
}
