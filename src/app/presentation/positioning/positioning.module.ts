import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PositioningComponent } from './positioning.component';

const POSITIONING_ROUTES: Routes = [
  { path: '', component: PositioningComponent }
];

@NgModule({
  declarations: [PositioningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(POSITIONING_ROUTES)
  ]
})
export class PositioningModule { }
