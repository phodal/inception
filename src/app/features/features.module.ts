import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { ProjectPurposeComponent } from './purpose/project-purpose/project-purpose.component';
import { ElevatorPitchComponent } from './vision/elevator-pitch/elevator-pitch.component';
import { BusinessCanvasComponent } from './purpose/business-canvas/business-canvas.component';

@NgModule({
  declarations: [
    ProjectPurposeComponent,
    BusinessCanvasComponent,
    ElevatorPitchComponent
  ],
  exports: [
    ProjectPurposeComponent,
    BusinessCanvasComponent,
    ElevatorPitchComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule
  ]
})
export class FeaturesModule { }
