import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BusinessComponent } from './business.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { BusinessMapComponent } from './business-map/business-map.component';
import { StakeholderMapComponent } from './stakeholder-map/stakeholder-map.component';

const routes: Routes = [
  { path: '', component: BusinessComponent }
];

@NgModule({
  declarations: [BusinessComponent, BusinessMapComponent, StakeholderMapComponent],
  imports: [
    FeaturesModule,
    SharedModule,
    CommonModule,
    DragDropModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessModule { }
