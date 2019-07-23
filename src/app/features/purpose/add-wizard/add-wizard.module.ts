import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddWizardComponent } from './add-wizard.component';
import { ProjectPurposeComponent } from '../project-purpose/project-purpose.component';
import { BusinessCanvasComponent } from '../business-canvas/business-canvas.component';
import { ProjectBalanceComponent } from '../project-balance/project-balance.component';
import { SharedModule } from '../../../shared/shared.module';
import { FeaturesModule } from '../../features.module';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: AddWizardComponent,
    children: [
      { path: 'purpose', component: ProjectPurposeComponent },
      { path: 'canvas', component: BusinessCanvasComponent },
      { path: 'balance', component: ProjectBalanceComponent }
    ]
  }];

@NgModule({
  declarations: [AddWizardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AddWizardComponent
  ]
})
export class AddWizardModule {
}
