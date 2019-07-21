import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSliderModule,
  MatStepperModule
} from '@angular/material';
import { NgModule } from '@angular/core';

const MATERIAL_IMPORTS_EXPORTS = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatSliderModule
];

@NgModule({
  imports: MATERIAL_IMPORTS_EXPORTS,
  exports: MATERIAL_IMPORTS_EXPORTS
})
export class CustomMaterialModule {
}
