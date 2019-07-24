import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PersonasComponent } from './personas.component';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';

const routes: Routes = [
  { path: '', component: PersonasComponent }
];


@NgModule({
  declarations: [PersonasComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FeaturesModule,
    CommonModule
  ]
})
export class PersonasModule { }
