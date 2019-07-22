import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TechnicalComponent } from './technical.component';
import { FeaturesModule } from '../../features/features.module';
import { SharedModule } from '../../shared/shared.module';

const TECHNICAL_ROUTES: Routes = [
  { path: '', component: TechnicalComponent }
];

@NgModule({
  declarations: [TechnicalComponent],
  imports: [
    FeaturesModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(TECHNICAL_ROUTES)
  ]
})
export class TechnicalModule { }
