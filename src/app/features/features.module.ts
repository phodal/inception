import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPurposeComponent } from './purpose/project-purpose/project-purpose.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ProjectPurposeComponent
  ],
  exports: [
    ProjectPurposeComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule
  ]
})
export class FeaturesModule { }
