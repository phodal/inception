import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  declarations: [],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  entryComponents: []
})
export class SharedModule {
}
