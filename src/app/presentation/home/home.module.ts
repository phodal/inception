import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesModule } from '../../features/features.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    FeaturesModule
  ]
})
export class HomeModule {
}
