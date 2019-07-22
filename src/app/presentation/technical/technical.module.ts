import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalComponent } from './technical.component';

const TECHNICAL_ROUTES: Routes = [
  { path: '', component: TechnicalComponent }
];

@NgModule({
  declarations: [TechnicalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TECHNICAL_ROUTES)
  ]
})
export class TechnicalModule { }
