import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BusinessComponent } from './business.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { BusinessMapComponent } from './business-map/business-map.component';

const routes: Routes = [
  { path: '', component: BusinessComponent }
];

@NgModule({
  declarations: [BusinessComponent, BusinessMapComponent],
  imports: [
    FeaturesModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessModule { }
