import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PositioningComponent } from './positioning.component';
import { FeaturesModule } from '../../features/features.module';

const POSITIONING_ROUTES: Routes = [
  { path: '', component: PositioningComponent }
];

@NgModule({
  declarations: [PositioningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(POSITIONING_ROUTES),
    FeaturesModule
  ]
})
export class PositioningModule { }
