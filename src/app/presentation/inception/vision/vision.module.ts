import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VisionComponent } from './vision.component';
import { FeaturesModule } from '../../../features/features.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

const VISION_ROUTES: Routes = [
  { path: '', component: VisionComponent }
];

@NgModule({
  declarations: [VisionComponent],
  imports: [
    FormsModule,
    CommonModule,
    FeaturesModule,
    SharedModule,
    RouterModule.forChild(VISION_ROUTES),
  ]
})

export class VisionModule {
}
