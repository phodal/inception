import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PositioningComponent } from './positioning.component';
import { FeaturesModule } from '../../../features/features.module';
import { SharedModule } from '../../../shared/shared.module';

const POSITIONING_ROUTES: Routes = [
  { path: '', component: PositioningComponent }
];

@NgModule({
  declarations: [PositioningComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesModule,
    RouterModule.forChild(POSITIONING_ROUTES)
  ]
})
export class PositioningModule { }
