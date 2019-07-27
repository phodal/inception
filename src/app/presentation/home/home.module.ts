import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesModule } from '../../features/features.module';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    FeaturesModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule {
}
