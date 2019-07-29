import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { KnowledgeManagementComponent } from './knowledge-management.component';

const routes: Routes = [
  { path: '', component: KnowledgeManagementComponent }
];

@NgModule({
  declarations: [KnowledgeManagementComponent],
  imports: [
    SharedModule,
    FeaturesModule,
    RouterModule.forChild(routes)
  ]
})
export class KnowledgeManagementModule {
}
