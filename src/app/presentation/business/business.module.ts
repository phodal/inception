import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessComponent } from './business.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: BusinessComponent }
];

@NgModule({
  declarations: [BusinessComponent],
  imports: [
    FeaturesModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessModule { }
