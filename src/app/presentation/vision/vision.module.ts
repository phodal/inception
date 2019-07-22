import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VisionComponent } from './vision.component';
import { FeaturesModule } from '../../features/features.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';

const VISION_ROUTES: Routes = [
  { path: '', component: VisionComponent }
];

@NgModule({
  declarations: [VisionComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(VISION_ROUTES),
    CoreModule,
    FeaturesModule
  ]
})

export class VisionModule {
}
