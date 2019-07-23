import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { ProjectPurposeComponent } from './purpose/project-purpose/project-purpose.component';
import { ElevatorPitchComponent } from './vision/elevator-pitch/elevator-pitch.component';
import { BusinessCanvasComponent } from './purpose/business-canvas/business-canvas.component';
import { PurposeComponent } from './purpose/purpose.component';
import { ProjectBalanceComponent } from './purpose/project-balance/project-balance.component';
import { AddWizardComponent } from './purpose/add-wizard/add-wizard.component';

@NgModule({
  declarations: [
    PurposeComponent,
    ProjectPurposeComponent,
    BusinessCanvasComponent,
    ProjectBalanceComponent,

    ElevatorPitchComponent
  ],
  exports: [
    PurposeComponent,
    ProjectPurposeComponent,
    BusinessCanvasComponent,
    ProjectBalanceComponent,

    ElevatorPitchComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule
  ]
})
export class FeaturesModule { }
