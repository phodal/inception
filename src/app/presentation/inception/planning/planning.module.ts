import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlanningComponent } from './planning.component';
import { SharedModule } from '../../../shared/shared.module';
import { FeaturesModule } from '../../../features/features.module';

const routes: Routes = [
  { path: '', component: PlanningComponent }
];

@NgModule({
  declarations: [PlanningComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesModule,
    RouterModule.forChild(routes)
  ]
})
export class PlanningModule { }
