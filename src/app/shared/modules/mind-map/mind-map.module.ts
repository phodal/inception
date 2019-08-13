import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MindMapComponent } from './mind-map/mind-map.component';



@NgModule({
  declarations: [MindMapComponent],
  exports: [MindMapComponent],
  imports: [
    CommonModule
  ]
})
export class MindMapModule { }
