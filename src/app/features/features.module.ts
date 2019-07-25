import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { ProjectPurposeComponent } from './purpose/project-purpose/project-purpose.component';
import { ElevatorPitchComponent } from './vision/elevator-pitch/elevator-pitch.component';
import { BusinessCanvasComponent } from './purpose/business-canvas/business-canvas.component';
import { ProjectBalanceComponent } from './purpose/project-balance/project-balance.component';
import { UserInterviewComponent } from './user-research/user-interview/user-interview.component';
import { BranchModelComponent } from './technical/branch-model/branch-model.component';
import { OrganizationMapComponent } from './user-research/organization-map/organization-map.component';

@NgModule({
  declarations: [
    ProjectPurposeComponent,
    BusinessCanvasComponent,
    ProjectBalanceComponent,

    // UserResearch
    UserInterviewComponent,
    OrganizationMapComponent,

    ElevatorPitchComponent,

    BranchModelComponent
  ],
  exports: [
    ProjectPurposeComponent,
    BusinessCanvasComponent,
    ProjectBalanceComponent,

    // UserResearch
    UserInterviewComponent,
    OrganizationMapComponent,

    ElevatorPitchComponent,

    BranchModelComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule
  ]
})
export class FeaturesModule { }
