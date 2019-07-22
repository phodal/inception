import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VisionComponent } from './vision.component';

const VISION_ROUTES: Routes = [
  { path: '', component: VisionComponent }
];

@NgModule({
  declarations: [VisionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(VISION_ROUTES)
  ]
})

export class VisionModule {
}
