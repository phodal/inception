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
import { TodoComponent } from './components/todo/todo.component';
import { BusinessMapComponent } from './business/business-map/business-map.component';
import { StakeholderMapComponent } from './business/stakeholder-map/stakeholder-map.component';
import { NewProjectChecklistComponent } from './technical/new-project-checklist/new-project-checklist.component';
import { ChecklistComponent } from './components/checklist/checklist.component';

@NgModule({
  declarations: [
    ProjectPurposeComponent, BusinessCanvasComponent, ProjectBalanceComponent,

    // UserResearch
    UserInterviewComponent, OrganizationMapComponent,

    ElevatorPitchComponent,

    // Technical
    BranchModelComponent, NewProjectChecklistComponent,

    // Business
    BusinessMapComponent, StakeholderMapComponent,

    // Components
    TodoComponent, ChecklistComponent
  ],
  exports: [
    ProjectPurposeComponent, BusinessCanvasComponent, ProjectBalanceComponent,

    // UserResearch
    UserInterviewComponent, OrganizationMapComponent,

    ElevatorPitchComponent,

    // Technical
    BranchModelComponent, NewProjectChecklistComponent,

    // Business
    BusinessMapComponent, StakeholderMapComponent,

    // Components
    TodoComponent, ChecklistComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule
  ]
})
export class FeaturesModule {
}
