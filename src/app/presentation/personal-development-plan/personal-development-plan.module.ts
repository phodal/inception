import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PersonalDevelopmentPlanComponent } from './personal-development-plan.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { ReviewTimelineComponent } from './review-timeline/review-timeline.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';

const routes: Routes = [
  { path: '', component: PersonalDevelopmentPlanComponent }
];


@NgModule({
  declarations: [
    PersonalDevelopmentPlanComponent,
    ReviewTimelineComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FeaturesModule,
    CommonModule,
    VerticalTimelineModule
  ]
})
export class PersonalDevelopmentPlanModule {
}
