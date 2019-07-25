import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BusinessComponent } from './business.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';

const routes: Routes = [
  { path: '', component: BusinessComponent }
];

@NgModule({
  declarations: [BusinessComponent],
  imports: [
    FeaturesModule,
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessModule { }
