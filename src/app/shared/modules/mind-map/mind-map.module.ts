import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MindmapComponent } from './mindmap/mindmap.component';



@NgModule({
  declarations: [MindmapComponent],
  exports: [MindmapComponent],
  imports: [
    CommonModule
  ]
})
export class MindMapModule { }
