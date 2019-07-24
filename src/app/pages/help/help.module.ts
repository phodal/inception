import { NgModule } from '@angular/core';

import { HelpComponent } from './help.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { MarkdownRenderModule } from '../../shared/components/markdown-render/markdown-render.module';


const routes: Routes = [
  { path: '', component: HelpComponent }
];

@NgModule({
  declarations: [HelpComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    FeaturesModule,
    MarkdownRenderModule,
    RouterModule.forChild(routes)
  ]
})
export class HelpModule { }
